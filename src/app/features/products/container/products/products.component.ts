import { Component, inject } from '@angular/core';
import { CategoryNamePipe } from '../../../../shared/pipes/category-name.pipe';
import { ProductCategoryComponent } from '../../presentational/product-category/product-category.component';
import { ProductsStore } from '../../state/products.store';
import { CheckoutStore } from '../../../../shared/checkout/state/checkout.store';

@Component({
  selector: 'app-products',
  imports: [ProductCategoryComponent, CategoryNamePipe],
  providers: [ProductsStore],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  protected readonly checkoutStore = inject(CheckoutStore);
  protected readonly productsStore = inject(ProductsStore);
}
