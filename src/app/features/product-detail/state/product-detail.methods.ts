import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { ProductDetailService } from '../service/product-detail.service';
import { ProductDetailsState } from './product-detail.state';

export function withProductDetailsMethods() {
  return signalStoreFeature(
    {
      state: type<ProductDetailsState>(),
    },
    withMethods(
      (store, productDetailService = inject(ProductDetailService)) => ({
        loadProductDetails: rxMethod<string>(
          exhaustMap((id: string) =>
            productDetailService.loadProductDetail(id).pipe(
              tapResponse({
                next: (product) => patchState(store, { product }),
                error: console.error,
              }),
            ),
          ),
        ),
      }),
    ),
  );
}
