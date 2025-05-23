import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductImageComponent } from '../../presentational/product-image/product-image.component';
import { ProductInfoComponent } from '../../presentational/product-info/product-info.component';
import { ProductDetailsStore } from '../../state/product-detail.store';
import { CheckoutStore } from '../../../../shared/checkout/state/checkout.store';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, ProductImageComponent, ProductInfoComponent],
  providers: [ProductDetailsStore],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  protected readonly checkoutStore = inject(CheckoutStore);
  protected readonly productDetailsStore = inject(ProductDetailsStore);

  id = input.required<string>();

  ngOnInit() {
    this.productDetailsStore.loadProductDetails(this.id());
  }
}
