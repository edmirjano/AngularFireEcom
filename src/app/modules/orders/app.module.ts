import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    OrderComponent],
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class AppModuleOrders { }
