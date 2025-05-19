import { initialProductsState } from './products.state';
import { createReducer, on } from '@ngrx/store';
import { ProductsActions } from './products.action';

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
      ...state,
      products,
  }))
)
