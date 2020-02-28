import {Injectable} from '@angular/core';
import {IProduct} from './product';


@Injectable ({
  providedIn: 'root'
})

export class ProductService {

  getProducts(): IProduct[] {
    return [
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
  }

}
