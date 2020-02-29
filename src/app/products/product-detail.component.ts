import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

import {IProduct} from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Opis produktu';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'Pad XBOX ONE',
      productCode: 'GMG-0042',
      releaseDate: '15 Marca 2020',
      // tslint:disable-next-line:max-line-length
      description: 'Przeznaczenie: Xbox One, Xbox One S, Xbox One X.\nInterfejs Bezprzewodowy.\nZastosowane technologie Wi-Fi.\nZmienia kolor w zależności od kąta patrzenia z niebieskiego na fioletowy.\nZasilanie: 2 paluszki AA.',
      price: 199.99,
      starRating: 4.6,
      imageUrl: 'assets/images/xbox-controller.jpg'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
