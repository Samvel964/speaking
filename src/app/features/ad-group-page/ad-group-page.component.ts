import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Subscription, finalize } from "rxjs";
import { KeyvalueI } from "src/app/shared/interfaces/key-value.interface";
import { GroupModel } from "src/app/shared/models/group.model";
import { GlobalService } from "src/app/shared/services/global.service";
import { GroupWebService } from "src/app/shared/web-services/group-web.service";

@Component({
    selector: 'ad-group-page',
    templateUrl: 'ad-group-page.component.html',
    styleUrls: ['ad-group-page.component.scss']
    
})
export class AdGroupPageComponent implements OnInit {

    groups!: GroupModel[];
    tableHeaderCols!: KeyvalueI[]; 

    constructor(
        private groupWebService: GroupWebService,
        private globalService: GlobalService,
        private cdr: ChangeDetectorRef
        ){}

    ngOnInit(): void {
        this.settableHeaderCols();
        this.getGroups();
    }

    getGroups(): void {
        this.globalService.onLoader();
        const subscription: Subscription = this.groupWebService.getAllGroups()
        .pipe(finalize(() => {
            subscription.unsubscribe();
            this.globalService.offLoader();
        }))
        .subscribe(response => {
            this.groups = response.data;            
        })
    }

    settableHeaderCols(): void {
        this.tableHeaderCols = [
          {
            key: 'id',
            value: 'Id'
          },
          {
            key: 'name',
            value: 'Group Name'
          },
          {
            key: 'level',
            value: 'Level'
          },
          {
            key: 'usersCount',
            value: 'Users Count'
          },
          {
            key: 'createdAt',
            value: 'Created at'
          },
          {
            key: 'Action',
            value: 'Action'
          }
        ] 
      }
}