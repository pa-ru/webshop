import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { ProductUiModule } from '@webshop/product-ui';

@NgModule({
  imports: [
    CommonModule,
    ProductUiModule
  ],
  declarations: [DashboardTileComponent],
  exports: [DashboardTileComponent]
})
export class OrderUiModule {
}
