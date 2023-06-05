import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subscription, finalize } from "rxjs";
import { WarningModalComponent } from "src/app/shared/components/warning-modal/warning-modal.component";
import { KeyvalueI } from "src/app/shared/interfaces/key-value.interface";
import { UserModel } from "src/app/shared/models/user.model";
import { GlobalService } from "src/app/shared/services/global.service";
import { SubscriptionManager } from "src/app/shared/services/subscription-manager.service";
import { UserWebService } from "src/app/shared/web-services/user-web.service";

@Component({
    selector: 'ad-user-page',
    templateUrl:'ad-user-page.component.html',
    styleUrls: ['ad-user-page.component.scss']
})
export class AdUserPageComponent implements OnInit, OnDestroy {

  subs: SubscriptionManager = new SubscriptionManager();

  constructor(
    private userWebService: UserWebService,
    private globalService: GlobalService,
    private router: Router,
    public dialog: MatDialog
  ) {}

    tableHeaderCols!: KeyvalueI[]; 
    users!: UserModel[];
    
    
      tableData = [
        {
          key: 'id',
          value: 1
        },
        {
          key: 'firstName',
          value: 'Liana'
        },
        {
          key: 'lastName',
          value: 'Nersisyan'
        },
        {
          key: 'actions',
          value: 'sadasd'
        },
        {
          key: 'id',
          value: 1
        },
      ]

      ngOnInit(): void {
        this.settableHeaderCols();
        this.fetchUsersData();
        // this.dialog.open(WarningModalComponent) 
      }

      navigateToCreatePage(): void {
        this.router.navigate(['admin/users', 'create'])
      }

      settableHeaderCols(): void {
        this.tableHeaderCols = [
          {
            key: 'id',
            value: 'Id'
          },
          {
            key: 'firstName',
            value: 'First Name'
          },
          {
            key: 'lastName',
            value: 'Last Name'
          },
          {
            key: 'age',
            value: 'Age'
          },
          {
            key: 'email',
            value: 'Email'
          },
          {
            key: 'phone',
            value: 'Phone'
          },
          {
            key: 'monthly_fee',
            value: 'Monthly pay'
          },
          {
            key: 'created_at',
            value: 'Created at'
          },
          {
            key: 'actions',
            value: 'Actions'
          },
        ] 
      }

      fetchUsersData(): void {
        this.globalService.onLoader();
        this.subs.sink = this.userWebService.getAllUsers()
        .pipe(finalize(() => {
          this.globalService.offLoader();
        }))
        .subscribe(response => {          
          this.users = response.data;          
        });
      }

      editUser(id: number): void {
        this.router.navigate(['admin/users/edit', id]);
      }

      deleteUser(id: number): void {
        this.globalService.onLoader();
        this.subs.sink = this.userWebService.deleteUser(id).subscribe(res => {
          this.fetchUsersData();
        })
      }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}