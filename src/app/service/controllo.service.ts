import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin, RegistraUtenti } from '../models/userData';

@Injectable({
  providedIn: 'root'
})
export class ControlloService {
  utentiregistrati : RegistraUtenti[] = [];

  constructor(
    private http : HttpClient
  ) { }

  login(userdata : UserLogin) : boolean{
    console.log(userdata)
    const utente = this.utentiregistrati.find(
      utente => 
      utente.email === userdata.email && utente.password === userdata.password
    );
    if(utente){
      return true
    }else{
      return false
    }
  };//login
  registra(utentaData : RegistraUtenti) : void{
    console.log(utentaData)
    this.utentiregistrati.push(utentaData)
  };//registra
  
 
};//class


//  .http
  //  .post('http://........',userdata)
  //.subscribe(data => console.log(data))