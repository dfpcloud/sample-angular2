import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  responseJson:any={};
  homeForm :FormGroup;
  constructor(private _homeService:HomeService) { 
    
  }

  ngOnInit() {
    this.homeForm=new FormGroup({
      "name":new FormControl(""),
      "description":new FormControl(""),
      "quantity":new FormControl("")
    });
    this._homeService.getData('api/items')
    .subscribe(
      data=>{
        console.log(data);
        this.responseJson=data;
        this.homeForm=new FormGroup({
          "name":new FormControl(this.responseJson.name),
          "description":new FormControl(this.responseJson.description),
          "quantity":new FormControl(this.responseJson.quantity)
        });
      },
      err=>{
        console.log(err);
      });
  }

  post(){    
    var payload=this.homeForm.value;
    this._homeService.setData('api/items',payload)
    .subscribe(
      data=>{

      },
    err=>{

    })
  }

}
