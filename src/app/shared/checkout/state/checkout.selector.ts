import { createFeatureSelector, createSelector } from '@ngrx/store';
import { checkoutKey, CheckoutState } from './checkout.state';

const featureSelector = createFeatureSelector<CheckoutState>(checkoutKey);

export const selectCartProducts = createSelector(
  featureSelector,
  (state: CheckoutState) => state.cartProducts,
);

export const selectCartProductCount = createSelector(
  selectCartProducts,
  (cartProducts) => cartProducts.length,
);

export const selectTotalAmount = createSelector(
  selectCartProducts,
  (cartProducts) =>
    cartProducts.reduce((acc: number, prev) => acc + prev.price, 0),
);
