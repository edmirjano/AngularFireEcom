import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { MaterialModule } from 'src/app/material-ui.module';

@NgModule({
  declarations: [
    MenuTopComponent],
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [MenuTopComponent],
  providers: [],
  bootstrap: []
})
export class AppModuleMenu { }
