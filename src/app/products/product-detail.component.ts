import {Component, OnInit} from '@angular/core';

import {IProduct} from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Opis produktu';
  product: IProduct;

  constructor() {
  }

  ngOnInit() {
  }

}
