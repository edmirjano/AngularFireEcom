import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from 'src/app/material-ui.module';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
    declarations: [
    LoginComponent,
    RegisterComponent],
    imports: [
      RouterModule,
      MaterialModule,
      AngularFireAuthModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleAuth { }
