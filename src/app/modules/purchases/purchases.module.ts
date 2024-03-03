import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases.component';
import { PurchaseService } from './services/purchase.service';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import { ClientPurchasesPageComponent } from './pages/client-purchases-page/client-purchases-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PurchasesComponent, PurchaseListComponent, PurchaseItemComponent, ClientPurchasesPageComponent],
  providers: [PurchaseService]
})
export class PurchasesModule {}
