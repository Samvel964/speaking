import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainLayoutComponent } from "./main-layout.component";
import { MainLayoutRouModule } from "./main-layout-routing.module";
import { HeaderModule } from "src/app/shared/primary-components/header/header.module";


@NgModule({
    imports: [CommonModule, MainLayoutRouModule, HeaderModule],
    declarations: [MainLayoutComponent]
})
export class MainLayoutModule {}