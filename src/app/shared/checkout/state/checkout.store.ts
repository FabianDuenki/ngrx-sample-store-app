import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialCheckoutState } from './checkout.state';
import { computed } from '@angular/core';
import { Product } from '../../models/product.models';

export const CheckoutStore = signalStore(
  { providedIn: 'root' },
  withState(initialCheckoutState),
  withComputed((store) => ({
    cartProductsCount: computed(() => store.cartProducts().length),
    totalAmount: computed(() =>
      store.cartProducts().reduce((acc, prev) => acc + prev.price, 0),
    ),
  })),
  withMethods((store) => ({
    addProductToCart: (product: Product) => {
      const cartProducts = [...store.cartProducts(), product];
      patchState(store, { cartProducts });
    },
    removeProductFromCart: (index: number) => {
      const cartProducts = [...store.cartProducts()];
      cartProducts.splice(index, 1);
      patchState(store, { cartProducts });
    },
  })),
);
