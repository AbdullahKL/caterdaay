import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import {throwError} from 'rxjs';
import {catchError } from 'rxjs/operators';
import { Contact } from '../app/Models/ContactUs'
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  httpOptions = {
    header:new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http:HttpClient,private server:GlobalService) { 

  }
  ContactPost(contact:Contact){
    return this.http.post(this.server.development.ms3 + "contactus",contact).pipe(
    catchError(this.handleError))
  }


  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`An error occured: ${error.error.message}`);
    }else{
      console.log(`Backend Error : ${error.status} and message is ${error.message}`);
    }
    return throwError("Something Went Wrong");
  }
}
