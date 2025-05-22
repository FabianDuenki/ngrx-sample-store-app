import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  ProductDetailAPIActions,
  ProductDetailUserActions,
} from './product-detail.actions';
import { ProductDetailService } from '../service/product-detail.service';

export const loadProducts$ = createEffect(
  (
    actions$ = inject(Actions),
    productDetailService = inject(ProductDetailService),
  ) =>
    actions$.pipe(
      ofType(ProductDetailUserActions.loadProductDetail),
      exhaustMap(({ id }) =>
        productDetailService.loadProductDetail(id).pipe(
          map((product) => {
            let productResponse = product ?? null;
            return ProductDetailAPIActions.loadProductDetailSuccess({
              product: productResponse,
            });
          }),
          catchError((error) =>
            of(ProductDetailAPIActions.loadProductDetailFailure({ error })),
          ),
        ),
      ),
    ),
  { functional: true },
);
