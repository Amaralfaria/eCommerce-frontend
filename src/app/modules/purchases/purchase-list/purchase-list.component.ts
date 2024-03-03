import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../services/purchase.service';
import { Purchase } from '../../../models/purchase';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  purchases: Purchase[];

  constructor(private purchaseService: PurchaseService) {
    this.purchases = [];
  }

  ngOnInit() {
    this.getClientPurchases();
  }

  getClientPurchases(){
    this.purchaseService.getPurchases().subscribe((data: any) => {
      this.purchases = data;
    })
  }

}
