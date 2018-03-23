import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()



export class HomeService {
    constructor(private _http:HttpClient){

    }

    getData(url){
        return this._http.get(url);
    }
}
