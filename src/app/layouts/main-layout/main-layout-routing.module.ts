import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "src/app/features/login-page/login-page.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
        // loadChildren: () => import('../../features/login-page/login-page.module').then(m => m.LoginPageModule)
    },
    {
        path: '',
        loadChildren: () => import('../../features/home-page/home-page.module').then((m) => m.HomePageModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainLayoutRouModule {}