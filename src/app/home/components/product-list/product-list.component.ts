import { Component, AfterContentInit,  ViewChild, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { Product } from '../../models/product';

import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, AfterContentInit {

  @Input() products: Product[];

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  };
  cols$: Observable<number>;
  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() { }

  ngAfterContentInit() {
    this.cols$ = this.observableMedia.asObservable()
    .pipe(
      map(change => this.gridByBreakpoint[change.mqAlias])
    );
  }
}
