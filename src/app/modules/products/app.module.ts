import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from 'src/app/material-ui.module';
import { MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
    ProductComponent],
    imports: [
      MaterialModule,
      RouterModule,
      MatTabsModule,
      BrowserModule,
      FlexLayoutModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleProducts { }
