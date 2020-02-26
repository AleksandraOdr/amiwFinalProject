import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';


// @ts-ignore
@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  pageTitle = 'Lista Produktów';
  imageWidth = 100;
  imageMargin = 2;
  showImage = false;
  filteredProducts: IProduct[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Grabie',
      productCode: 'GDN-0011',
      releaseDate: '15 Marzec 2020',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.jpg'
    },
    {
      productId: 2,
      productName: 'Taczka ogrodowa',
      productCode: 'GDN-0023',
      releaseDate: '15 Marzec 2020',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.jpg'
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'taczka';
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('OnInit metod');
  }
}
