import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of,delay, concatMap ,from, Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class CustomerService {
    constructor(
        private http: HttpClient)
    { }

    /**
     * 
     * @returns Array of object header:string value:number
     */
    GetHeader():Observable<any>{
        const localUrl = 'assets/data/dataHeader.json';  
        return this.http.get<any>(localUrl);
        
    }

    /**
     * 
     * @returns Array of object 
     */
     GetHPageModel():Observable<any>{
        const localUrl = 'assets/data/pagemodel.json';  
        return this.http.get<any>(localUrl);
        
    }


}