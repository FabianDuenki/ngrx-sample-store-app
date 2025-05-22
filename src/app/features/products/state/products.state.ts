import { Product } from '../../../shared/models/product.models';

export type ProductsState = {
  products: Product[];
};

export const initialProductsState: ProductsState = {
  products: [],
};
