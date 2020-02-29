import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {IProduct} from './product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('Wszystko: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Wystąpił błąd: ${err.error.message}`;
    } else {
      errorMessage = `Server zwrócił kod błędu: ${err.status}, wystąpił błąd: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
