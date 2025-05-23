import { signalStore, withHooks, withState } from '@ngrx/signals';
import { initialProductsState, ProductsState } from './products.state';
import { withProductsSelectors } from './products.selectors';
import { withProductsMethods } from './products.methods';
import { withLoadingState } from '../../../shared/store-features/loading-state.feature';

export const ProductsStore = signalStore(
  withState<ProductsState>(initialProductsState),
  withLoadingState(),
  withProductsMethods(),
  withProductsSelectors(),
  withHooks({
    onInit: ({ loadProducts }) => loadProducts(),
  }),
);
