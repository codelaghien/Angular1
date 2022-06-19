import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public title: string = 'Đây là Home 123';
  public myName: string = '';
  public myColor: string = 'red';
  public myClass: string = '';
  public myDropdown: string[] = [];
  public chao = '';

  constructor(private helper: HelperService) {}

  ngOnInit(): void {
    this.myDropdown = [];
    this.chao = this.helper.hello();
    this.helper.name = 'Khuê';
  }

  public onChange(): void {
    console.log('onChange=', this.myName);
  }

  public changeColor(): void {
    this.myColor = 'blue';
    this.myClass = 'my-style';
  }

  public addName(): void {
    this.myDropdown.push(this.myName);
  }
}
