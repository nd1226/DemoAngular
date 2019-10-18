import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi, 'vi');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartBodyComponent } from './cart-body/cart-body.component';
import { CartPriceComponent } from './cart-price/cart-price.component';

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartBodyComponent,
    CartPriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
