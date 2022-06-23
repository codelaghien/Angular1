import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
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
  public users: any[] = [];
  public loading = true;

  constructor(
    private helper: HelperService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.myDropdown = [];
    this.chao = this.helper.hello();
    this.helper.name = 'Khuê';

    // setTimeout(() => {
    //   this.dataService.getUsers(7).subscribe((data) => {
    //     console.log('data=', data);
    //     if (data && data.results) {
    //       this.users = data.results;
    //       this.loading = false;
    //     }
    //   });
    // }, 5000);

    this.dataService.getUsers(7).subscribe((data) => {
      console.log('data=', data);
      if (data && data.results) {
        this.users = data.results;
        this.loading = false;
      }
    });
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
