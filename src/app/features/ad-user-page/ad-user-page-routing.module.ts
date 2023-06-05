import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdUserPageComponent } from './ad-user-page.component';
import { AdUserCreateEditComponent } from './user-create-edit-page/user-create-edit-page.component';

const routes: Routes = [
    {path: '', component: AdUserPageComponent},
    {path: 'create', component: AdUserCreateEditComponent},
    {path: 'edit/:id', component: AdUserCreateEditComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdUserPageRouting {}