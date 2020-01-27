import { AboutComponent } from './modules/common/components/about/about.component';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { ProductComponent } from './modules/products/components/product/product.component';
import { HomeComponent } from './modules/common/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './modules/orders/components/order/order.component';
import { LoginserviceService } from './modules/auth/services/loginservice.service';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginserviceService]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'orders',
    component: OrderComponent,
    canActivate: [LoginserviceService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
