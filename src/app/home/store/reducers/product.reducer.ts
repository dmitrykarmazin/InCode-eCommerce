import * as ProductActions from '../actions/product.actions';
import {} from '../actions/product.actions';

import { Product } from '../../models/product';

export interface State {
  loading: boolean;
  products: Product[];
  error: Error;
}
export const initialState: State = {
    loading: false,
    products: null,
    error: null
};

export function productReducer(state = initialState, action: ProductActions.Actions): State {
    switch (action.type) {
      case ProductActions.FETCH_PRODUCTS: {
        return { ...state, loading: true };
      }
      case ProductActions.FETCH_PRODUCT_FAIL: {
        return { ...state, error: action.payload , loading: false };
      }
      case ProductActions.FETCH_PRODUCT_SUCCESS: {
        return { ...state, products: action.payload, loading: false};
      }
      default:
        return state;
    }
  }


