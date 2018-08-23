import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProductService {
  private url = '/assets/products.json';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
