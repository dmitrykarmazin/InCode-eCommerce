import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() products: Product[];

  ngOnInit() {
  }
}
