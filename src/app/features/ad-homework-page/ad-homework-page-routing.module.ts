import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AdHomeWorkComponent } from "./ad-homework-page.component";

const router: Routes = [{path: "", component: AdHomeWorkComponent}]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class AdHomeWorkRoutingModule {}