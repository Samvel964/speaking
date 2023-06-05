import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminLayoutComponent } from "./admin-layout.component";
import { AdminLayoutRoutingModule } from "./admin-layout-routing.module";
import { SideBarModule } from "src/app/shared/primary-components/sidebar/sidebar.module";

@NgModule({
    imports: [CommonModule, AdminLayoutRoutingModule, SideBarModule],
    declarations: [AdminLayoutComponent],
    exports: []
})
export class AdminLayoutModule {}