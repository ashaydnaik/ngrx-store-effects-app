import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl: 'product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise: Pizza;
  toppings: Topping[];

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza);
  }

  onSelect(event: number[]) {

  }

  onUpdate(event: Pizza) {

  }

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {

    }
  }
}
