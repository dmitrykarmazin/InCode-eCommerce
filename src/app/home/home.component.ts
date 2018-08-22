import { Product } from './models/product';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import * as actions from './store/actions/product.actions';
import * as fromRoot from './store/reducers/product.reducer';
import * as selectors from './store/selectors/product.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private store: Store<fromRoot.State>) {
   }

  ngOnInit() {
    this.products$ = this.store.select(selectors.getProducts);
    this.store.dispatch(new actions.FetchProduct());
  }


}