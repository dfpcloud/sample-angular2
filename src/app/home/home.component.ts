import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  responseJson:any={};
  constructor(private _homeService:HomeService) { }

  ngOnInit() {
    this._homeService.getData('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(
      data=>{
        console.log(data);
        this.responseJson=data;
      },
      err=>{
        console.log(err);
      });
  }

}
