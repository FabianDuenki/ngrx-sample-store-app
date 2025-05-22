import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { ProductsState } from './products.state';

export function withProductsMethods() {
  return signalStoreFeature(
    {
      state: type<ProductsState>(),
    },
    withMethods(
      (
        store,
        productsService = inject(ProductsService),
        router = inject(Router),
      ) => ({
        loadProducts: rxMethod<void>(
          exhaustMap(() =>
            productsService.loadProducts().pipe(
              tapResponse({
                next: (products) => patchState(store, { products }),
                error: console.error,
              }),
            ),
          ),
        ),
        navigateToDetail: (id: string) => router.navigate(['/products', id]),
      }),
    ),
  );
}
