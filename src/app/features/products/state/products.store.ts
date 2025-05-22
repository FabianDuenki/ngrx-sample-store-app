import { signalStore, withHooks, withState } from '@ngrx/signals';
import { initialProductsState, ProductsState } from './products.state';
import { withProductsSelectors } from './products.selectors';
import { withProductsMethods } from './products.methods';

export const ProductsStore = signalStore(
  withState<ProductsState>(initialProductsState),
  withProductsMethods(),
  withProductsSelectors(),
  withHooks({
    onInit: ({ loadProducts }) => loadProducts(),
  }),
);
