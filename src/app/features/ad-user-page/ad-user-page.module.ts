import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdUserPageComponent } from "./ad-user-page.component";
import { AdUserPageRouting } from "./ad-user-page-routing.module";
import { TableModule } from "src/app/shared/components/table/table.module";
import { UserWebService } from "src/app/shared/web-services/user-web.service";
import { IconsModule } from "src/app/shared/icons/icons.module";
import { AdUserCreateModule } from "./user-create-edit-page/user-create-edit-page.module";
import { MatInputModule } from '@angular/material/input';
import { WarningModalModule } from "src/app/shared/components/warning-modal/warning-modal.module";
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
    imports: [
        CommonModule, 
        TableModule, 
        AdUserPageRouting, 
        IconsModule, 
        AdUserCreateModule,
        MatInputModule,
        MatDialogModule
    ],
    declarations: [AdUserPageComponent],
    providers: [UserWebService]
})
export class AdUserPageModule {}