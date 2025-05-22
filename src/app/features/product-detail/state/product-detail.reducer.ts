import { initialProductDetailState } from './product-detail.state';
import { createReducer, on } from '@ngrx/store';
import { ProductDetailAPIActions } from './product-detail.actions';

export const productDetailReducer = createReducer(
  initialProductDetailState,
  on(
    ProductDetailAPIActions.loadProductDetailSuccess,
    (state, { product }) => ({
      ...state,
      product,
    }),
  ),
);
