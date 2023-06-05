import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdGroupPageComponent } from "./ad-group-page.component";
const routes: Routes = [
    {
        path: "", component: AdGroupPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdGroupPageRoutingModule {}