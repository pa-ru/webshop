import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardTileComponent],
  exports: [DashboardTileComponent]
})
export class ProductUiModule {
}
