import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    imports: [CommonModule, MatTableModule],
    declarations: [TableComponent],
    exports: [TableComponent]
})

export class TableModule {}