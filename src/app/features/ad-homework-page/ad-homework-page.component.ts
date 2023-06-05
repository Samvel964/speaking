import { Component, OnInit }  from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { KeyvalueI } from 'src/app/shared/interfaces/key-value.interface';
import { HomeworkModel } from 'src/app/shared/models/homework.model';
import { HomeworkService } from 'src/app/shared/web-services/homework.service';

@Component({
    selector: 'ad-homework-page',
    templateUrl: 'ad-homework-page.component.html',
    styleUrls: ['ad-homework-page.component.scss']
})
export class AdHomeWorkComponent implements OnInit {

    tableHeaderCols!: KeyvalueI[];
    homeWorks!: HomeworkModel[];

    constructor(private homeworkService: HomeworkService) {}
    ngOnInit(): void {
        this.settableHeaderCols();
        this.getHomeworks();
    }

    getHomeworks() {
        const Subscription: Subscription = this.homeworkService.getAllHomeworks()
        .pipe(finalize(() => Subscription.unsubscribe()))
        .subscribe(response => {this.homeWorks = response.data; console.log(this.homeWorks, 'home')})
    }

    settableHeaderCols(): void {
        this.tableHeaderCols = [
          {
            key: 'id',
            value: 'Id'
          },
          {
            key: 'title',
            value: 'Title'
          },
          {
            key: 'group',
            value: 'Group'
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