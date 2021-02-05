import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ApplicazioneComponent } from './applicazione/applicazione.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'registrazione',
    component : RegistrazioneComponent,
  },
  {
    path : 'applicazione',
    component : ApplicazioneComponent,
    canActivate:[AuthGuardService]
  },
  {
    path :'**', 
    redirectTo : '/login',
    pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
