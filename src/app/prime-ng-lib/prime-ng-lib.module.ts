import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [CommonModule, CheckboxModule, DropdownModule],
  exports: [CheckboxModule, DropdownModule],
})
export class PrimeNgLibModule {}