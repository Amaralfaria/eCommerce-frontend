import { Component, Input, OnInit } from '@angular/core';
import { Purchase } from '../../../models/purchase';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {

  @Input()
  purchase!: Purchase;


  constructor() {
  }

  ngOnInit() {
  }

}
