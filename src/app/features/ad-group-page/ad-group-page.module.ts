import { NgModule } from "@angular/core";
import { AdGroupPageComponent } from "./ad-group-page.component";
import { CommonModule } from "@angular/common";
import { AdGroupPageRoutingModule } from "./ad-group-page-routing.module";
import { GroupWebService } from "src/app/shared/web-services/group-web.service";
import { IconsModule } from "src/app/shared/icons/icons.module";

@NgModule({
    imports: [CommonModule, AdGroupPageRoutingModule, IconsModule],
    declarations: [AdGroupPageComponent],
    providers: [GroupWebService]
})
export class AdGroupPageModule {}