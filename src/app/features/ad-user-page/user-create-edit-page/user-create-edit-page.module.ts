import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdUserCreateEditComponent } from "./user-create-edit-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [AdUserCreateEditComponent]
})
export class AdUserCreateModule {}