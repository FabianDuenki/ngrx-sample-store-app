import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { computed } from '@angular/core';
import { Product } from '../../../shared/models/product.models';
import { ProductsState } from './products.state';

export function withProductsSelectors() {
  return signalStoreFeature(
    {
      state: type<ProductsState>(),
    },
    withComputed((store) => ({
      productsByCategory: computed(() => {
        const products = store.products();
        const productsByCategory = products.reduce(
          (result: Record<string, Product[]>, product) => {
            const category = product.category;

            if (!result[category]) {
              result[category] = [];
            }

            result[category].push(product);
            return result;
          },
          {},
        );

        const categories = Object.keys(productsByCategory);

        return categories.map((category) => ({
          category,
          products: productsByCategory[category],
        }));
      }),
    })),
  );
}
