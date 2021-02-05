import { Component, OnInit } from '@angular/core';
import { ControlloService } from '../service/controllo.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistraUtenti } from '../models/userData';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  patternNominativo : string;;
  patternEmail : string;
  patternPassword : string;
  erroreNominativo : string;
  validoNominativo : string;
  erroreEmail : string;
  validoEmail : string;
  errorePass : string;
  validoPass : string;


  constructor(
    private loginService : ControlloService,
    private router : Router,
  ) { 
    this.patternNominativo = "^\s*([A-Za-z]{2,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$",
    this.patternEmail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
    this.patternPassword = "^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$",
    this.erroreNominativo = 'Inserisci un nome e cognome',
    this.validoNominativo = 'Nome e Cognome validi',
    this.validoEmail = 'Email valido',
    this.erroreEmail ='Inserisci un Email valido',
    this.errorePass ='Inserisci una password valida',
    this.validoPass = 'Password valido'
  }

  ngOnInit(): void {
  }
  registra(f : NgForm){
    const nuovoUtente : RegistraUtenti = {
      nominativo : f.value.nominativo,
      email : f.value.email,
      password : f.value.password,
    }
    alert('Grazie per la registrazione')
    this.loginService.registra(nuovoUtente)
    this.router.navigateByUrl('login')
  }

}
