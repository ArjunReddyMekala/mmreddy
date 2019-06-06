import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FresherService {

  url:string="http://192.168.43.141:3005/jobseeker/fresher"
  
  constructor(public http:HttpClient) { 
    this.http=http;
  }
  registerFresher(formData:FormData):Observable<any>{

    return this.http.post(this.url,formData);
   /* return this.http.post(this.url,{
      "firstName": firstname,
      "lastName":lastname
    })*/
  }
}
