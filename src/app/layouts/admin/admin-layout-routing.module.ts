import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const router: Routes = [
    {
        path: '', 
        loadChildren: () => import('../../features/ad-dashoard-page/ad-dashboard-page.module').then((m) => m.AdDashboardModule)
    },
    {
        path: 'users',        
        loadChildren: () => import('../../features/ad-user-page/ad-user-page.module').then((m) => m.AdUserPageModule)
    },
    {
        path: 'groups',        
        loadChildren: () => import('../../features/ad-group-page/ad-group-page.module').then((m) => m.AdGroupPageModule)
    },
    {
        path: 'homework',        
        loadChildren: () => import('../../features/ad-homework-page/ad-homework-page.module').then((m) => m.AdHomeWorkModule)
    },
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule {}