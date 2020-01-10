import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from 'src/app/material-ui.module';

@NgModule({
    declarations: [
    ProductComponent],
    imports: [
      MaterialModule,
      RouterModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleProducts { }
