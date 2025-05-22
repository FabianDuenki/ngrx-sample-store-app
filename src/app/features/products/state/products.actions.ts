import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../../shared/models/product.models';
import { productsFeatureKey } from './products.state';

export const ProductsActions = createActionGroup(
  {
    source: productsFeatureKey,
    events: {
      'Load Products': emptyProps(),
      'Load Products Success': props<{ products: Product[] }>(),
      'Load Products Failure': props<{ error: string }>(),
      'Navigate To Detail': props<{ id: string }>(),
    },
  }
)
