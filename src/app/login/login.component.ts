import { Component, OnInit } from '@angular/core';
import { ControlloService } from '../service/controllo.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserLogin } from '../models/userData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  patternEmail : string;
  patternPassword : string;
  erroreEmail : string;
  validoEmail : string;
  errorePass : string;
  validoPass : string;

  constructor(
    private loginservice : ControlloService,
    private router : Router
  ) {
    this.patternEmail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.patternPassword = "^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$";
    this.erroreEmail = 'Inserisci un Email valido';
    this.validoEmail = 'Email valido';
    this.errorePass = 'Insersci una password valido';
    this.validoPass = 'Password valido'
   }

  ngOnInit(): void {
  }
  login(f : NgForm) {
    const userData : UserLogin = {
      email : f.value.email,
      password : f.value.password,
    }
    const validation = this.loginservice.login(userData);
    if(validation){
      localStorage.setItem('user',userData.email)
      this.router.navigateByUrl('applicazione')
    }else{
      alert('Utente non registrato, clicca "Sign Up" per registrarti')
    }
  }

}//class
