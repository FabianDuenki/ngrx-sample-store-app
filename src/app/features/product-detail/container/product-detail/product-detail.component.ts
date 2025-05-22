import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../../shared/models/product.models';
import { ProductImageComponent } from '../../presentational/product-image/product-image.component';
import { ProductInfoComponent } from '../../presentational/product-info/product-info.component';
import { ProductDetailUserActions } from '../../state/product-detail.actions';
import { Store } from '@ngrx/store';
import { selectProductDetail } from '../../state/product-detail.selector';
import { CheckoutUserActions } from '../../../../shared/checkout/state/checkout.actions';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, ProductImageComponent, ProductInfoComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  private readonly store = inject(Store);

  id = input.required<string>();

  product = this.store.selectSignal(selectProductDetail);

  onAddToCartClicked(product: Product): void {
    this.store.dispatch(CheckoutUserActions.addProductToCart({ product }));
  }

  ngOnInit() {
    this.store.dispatch(
      ProductDetailUserActions.loadProductDetail({ id: this.id() }),
    );
  }
}
