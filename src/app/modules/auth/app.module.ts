import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from 'src/app/material-ui.module';

@NgModule({
    declarations: [
    LoginComponent,
    RegisterComponent],
    imports: [
      RouterModule,
      MaterialModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleAuth { }
