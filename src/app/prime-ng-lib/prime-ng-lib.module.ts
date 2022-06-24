import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckboxModule,
    DropdownModule,
    DataViewModule,
    TableModule,
  ],
  exports: [CheckboxModule, DropdownModule, DataViewModule, TableModule],
})
export class PrimeNgLibModule {}
