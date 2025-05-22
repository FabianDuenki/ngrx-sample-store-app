import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import {
  initialProductDetailsState,
  ProductDetailsState,
} from './product-detail.state';
import { inject } from '@angular/core';
import { ProductDetailService } from '../service/product-detail.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export const ProductDetailsStore = signalStore(
  withState<ProductDetailsState>(initialProductDetailsState),
  withMethods((store, productDetailService = inject(ProductDetailService)) => ({
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
  })),
);
