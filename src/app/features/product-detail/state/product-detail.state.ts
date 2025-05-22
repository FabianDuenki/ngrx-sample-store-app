import { Product } from '../../../shared/models/product.models';

export type ProductDetailsState = {
  product: Product | null;
};

export const initialProductDetailsState: ProductDetailsState = {
  product: null,
};
