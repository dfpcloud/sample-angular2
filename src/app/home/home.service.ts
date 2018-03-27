import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable()



export class HomeService {
    apiurl:string;
    constructor(private _http:HttpClient){

    }

    getData(url){
        return this._http.get(environment.apiurl+url);
    }

    setData(url,payload){
        return this._http.post(environment.apiurl+url,payload);
    }
    
}
