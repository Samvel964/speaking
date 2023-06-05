import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page.component";

const router: Routes = [
    {
        path: '',
        component: LoginPageComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class LoginPageRoutingModule {
    
}