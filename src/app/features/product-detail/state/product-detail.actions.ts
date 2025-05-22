import { createActionGroup, props } from '@ngrx/store';
import { Product } from '../../../shared/models/product.models';
import { productDetailFeatureKey } from './product-detail.state';

export const ProductDetailUserActions = createActionGroup({
  source: productDetailFeatureKey,
  events: {
    'Load Product Detail': props<{ id: string }>(),
  },
});

export const ProductDetailAPIActions = createActionGroup({
  source: productDetailFeatureKey,
  events: {
    'Load Product Detail Success': props<{ product: Product | null }>(),
    'Load Product Detail Failure': props<{ error: string }>(),
  },
});
