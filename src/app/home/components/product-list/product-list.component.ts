import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  constructor() { }

  @Input() products: Product[];

  ngOnInit() {
  }
}
