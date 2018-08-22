
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/product.reducer';


export const ProductState = createFeatureSelector<State>('product');

export const getError = createSelector(ProductState, (state: State) => state.error);

export const getProducts = createSelector(ProductState, (state: State) => state.products);

export const getLoadStatus = createSelector(ProductState, (state: State) => state.loading);
