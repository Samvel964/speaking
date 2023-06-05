import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdHomeWorkComponent } from "./ad-homework-page.component";
import { AdHomeWorkRoutingModule } from "./ad-homework-page-routing.module";
import { HomeworkService } from "src/app/shared/web-services/homework.service";
import { IconsModule } from "src/app/shared/icons/icons.module";

@NgModule({
    imports: [CommonModule, AdHomeWorkRoutingModule, IconsModule],
    declarations: [AdHomeWorkComponent],
    providers: [HomeworkService]
})
export class AdHomeWorkModule {}