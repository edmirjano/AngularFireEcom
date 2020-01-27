import { RouterModule } from '@angular/router';
import { AppModuleCommon } from './modules/common/app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material-ui.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppModuleAdmin } from './modules/admin/app.module';
import { AppModuleAuth } from './modules/auth/app.module';
import { AppModuleMenu } from './modules/menu/app.module';
import { AppModuleProducts } from './modules/products/app.module';
import { AppModuleOrders } from './modules/orders/app.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    AppModuleAdmin,
    AppModuleAuth,
    AppModuleMenu,
    AppModuleProducts,
    AppModuleCommon,
    AppModuleOrders,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
