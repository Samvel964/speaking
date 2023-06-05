import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader.component";
import { IconsModule } from "../../icons/icons.module";

@NgModule({
    imports: [CommonModule, IconsModule],
    declarations: [LoaderComponent],
    exports: [LoaderComponent]
})
export class LoaderModule {}