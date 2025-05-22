import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutService } from '../../../../shared/services/checkout.service';
import { HeaderComponent } from '../../presentational/header/header.component';
import { selectCartProductCount } from '../../../../shared/checkout/state/checkout.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shell',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  private readonly checkoutService = inject(CheckoutService);
  private readonly store = inject(Store);

  readonly cartProductsCount = this.store.selectSignal(selectCartProductCount);
}
