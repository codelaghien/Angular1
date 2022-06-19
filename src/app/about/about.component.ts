import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private helper: HelperService) {}

  public checked = false;
  public cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  public selectedCity: any;
  public chao = '';

  public ngOnInit(): void {
    this.chao = this.helper.hello();
  }

  public checkboxChange(): void {
    console.log('checkboxChange checked=', this.checked);
  }
  public dropdownChange(): void {
    console.log('dropdownChange=', this.selectedCity);
  }
}
