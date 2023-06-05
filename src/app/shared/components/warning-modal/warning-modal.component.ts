import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'sp-warning-modal',
    templateUrl: 'warning-modal.component.html',
    styleUrls: ['warning-modal.component.scss']
})
export class WarningModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

}