import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { finalize } from "rxjs";
import { GroupModel } from "src/app/shared/models/group.model";
import { UserModel } from "src/app/shared/models/user.model";
import { GlobalService } from "src/app/shared/services/global.service";
import { SubscriptionManager } from "src/app/shared/services/subscription-manager.service";
import { GroupWebService } from "src/app/shared/web-services/group-web.service";
import { UserWebService } from "src/app/shared/web-services/user-web.service";


@Component({
    selector: 'ad-user-create',
    templateUrl: 'user-create-edit-page.component.html',
    styleUrls: ['user-create-edit-page.component.scss']    
})
export class AdUserCreateEditComponent implements OnInit, OnDestroy {
    private subs: SubscriptionManager = new SubscriptionManager();

    createUserForm!: FormGroup;
    groups!: GroupModel[];

    editedUser!: UserModel;

    constructor(
        private groupWebService: GroupWebService,
        private userWebService: UserWebService,
        private router: Router,
        private globalService: GlobalService,
        private route: ActivatedRoute
        ) {}

    ngOnInit(): void {
        this.initializeCreateUserForm();
        this.setGroups();
        this.getIdFromPath();
    }

    getIdFromPath(): void {
        this.subs.sink = this.route.params.subscribe(param => {
            if (param['id']) {
                this.getUserById(param['id']);
            }
        })
    }
    getUserById(id: number): void {
        this.subs.sink = this.userWebService.getUserById(id).subscribe(res => {
            this.editedUser = res.data as unknown as UserModel;
            this.initializeCreateUserForm(this.editedUser);
        })
    }

    setGroups(): void {
        this.subs.sink = this.groupWebService.getAllGroups().subscribe(res => {
            this.groups = res.data;
        })
    }

    initializeCreateUserForm(editedUser?: UserModel): void {
        this.createUserForm = new FormGroup({
            first_name: new FormControl(editedUser ? editedUser.first_name : null),
            last_name: new FormControl(editedUser ? editedUser.last_name : null),
            age: new FormControl(editedUser ? editedUser.age : null),
            email: new FormControl(editedUser?.email ?? null),
            group_id: new FormControl(editedUser?.group.id ?? null),
            // password: new FormControl(null),
            monthly_fee: new FormControl(editedUser?.monthly_fee ?? null),
            phone: new FormControl(editedUser?.phone ?? null),
        })
    }

    createFormSubmit(): void {
        this.globalService.onLoader();

        if (this.editedUser) {
            this.subs.sink = this.userWebService.updateUser(this.editedUser.id, this.createUserForm.value)
            .pipe(finalize(() => this.globalService.offLoader()))
            .subscribe(res => {
                this.router.navigate(['admin', 'users']);
            });
            return;
        }

        this.subs.sink = this.userWebService.createUser(this.createUserForm.value)
        .pipe(finalize(() => this.globalService.offLoader()))
        .subscribe(() => {
            this.router.navigate(['admin', 'users']);
        });
    }

    navigateToBack(): void {
        this.router.navigate(['admin', 'users']);
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}