import { initialProductsState } from './products.state';
import { createReducer, on } from '@ngrx/store';
import { ProductsActions } from './products.actions';

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
);
