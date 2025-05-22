import { createActionGroup, props } from '@ngrx/store';
import { Product } from '../../models/product.models';
import { checkoutKey } from './checkout.state';

export const CheckoutUserActions = createActionGroup({
  source: checkoutKey,
  events: {
    'Add Product to Cart': props<{ product: Product }>(),
    'Remove Product from Cart': props<{ index: number }>(),
  },
});
