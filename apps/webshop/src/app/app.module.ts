import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductUiModule } from '@webshop/product-ui';
import { OrderUiModule } from '@webshop/order-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductUiModule,
    OrderUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
