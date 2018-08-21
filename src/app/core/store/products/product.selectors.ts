
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from './product.reducer';


export const ProductState = createFeatureSelector<fromRoot.State>('product');

// export const getError = createSelector(ProductState, fromRoot.getError);

export const getProducts = createSelector(ProductState, fromRoot.getProducts);
export const getLoadStatus = createSelector(ProductState, fromRoot.getLoadStatus);
