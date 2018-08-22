import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Actions, Effect, ofType} from '@ngrx/effects';

import { ProductService} from '../../services/product.service';
import * as productsActions from '../actions/product.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions, private productService: ProductService ) { }

    @Effect()
    init$: Observable<Action>  = this.actions$
        .ofType(productsActions.FETCH_PRODUCTS)
        .pipe(
            switchMap(() => {
                return this.productService.getProducts()
                .pipe(
                     map(products => new productsActions.FetchProductSuccess(products)),
                     catchError((error: any) => {
                        return of(new productsActions.FetchProductFail(error));
                     })
                );
            })
        );
    // @Effect()
    // init$: Observable<Action>  = this.actions$.pipe(
    //     ofType(productsActions.FETCH_PRODUCTS),
    //     switchMap(() => {
    //        return this.productService.getProducts().pipe(
    //              map(products => new productsActions.FetchProductSuccess(products)),
    //              catchError((error: any) => {
    //                 return of(new productsActions.FetchProductFail(error));
    //              })
    //         );
    //     })
    // );
}
