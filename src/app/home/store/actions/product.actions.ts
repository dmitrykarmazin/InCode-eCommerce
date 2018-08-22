import { Product } from '../../models/product';
import { Action } from '@ngrx/store';

export const FETCH_PRODUCTS = 'Fetch products';
export const FETCH_PRODUCT_SUCCESS = 'Fetch products success';
export const FETCH_PRODUCT_FAIL = 'Fetch products fail';




export class FetchProduct implements Action {
    readonly type = FETCH_PRODUCTS;
    constructor() { }
}

export class FetchProductSuccess implements Action {
    readonly type = FETCH_PRODUCT_SUCCESS;
    constructor(public payload: Product[]) { }
}
export class FetchProductFail implements Action {
    readonly type = FETCH_PRODUCT_FAIL;
    constructor(public payload: Error) { }
}
export type Actions = FetchProduct|FetchProductSuccess| FetchProductFail;
