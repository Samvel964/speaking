import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdDashboardComponent } from "./ad-dashboard-page.component";
import { AdDashboardRoutingModule } from "./ad-dashboard-page-routing-module";

@NgModule({
    imports: [CommonModule, AdDashboardRoutingModule],
    declarations: [AdDashboardComponent]
})
export class AdDashboardModule {}