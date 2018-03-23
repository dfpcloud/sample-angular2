import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HomeService } from './home/home.service'

const routes =[ { path:'home', component:HomeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
