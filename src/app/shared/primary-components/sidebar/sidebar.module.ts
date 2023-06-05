import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { IconsModule } from '../../icons/icons.module';


@NgModule({
    imports: [CommonModule, IconsModule],
    declarations: [SidebarComponent],
    exports: [SidebarComponent],
})

export class SideBarModule {}