import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent],
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [HomeComponent],
  providers: [],
  bootstrap: []
})
export class AppModuleCommon { }
