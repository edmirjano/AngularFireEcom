import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialModule } from 'src/app/material-ui.module';

@NgModule({
    declarations: [
    AdminComponent],
    imports: [
      MaterialModule,
      RouterModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleAdmin { }
