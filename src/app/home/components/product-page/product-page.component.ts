import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: any = {
    title: 'Google pixel 2',
    thumbnail: 'https://cdn.pixabay.com/photo/2017/11/18/00/47/pixel-2-xl-2958928_960_720.png',
    price: '$799.99',
    category_id: '1',
    category_title: 'phone',
    stock: 77,
    description: 'Est officia nisi culpa Lorem dolor in irure voluptate enim excepteur ad. Voluptate pariatur ea eslagjgkjdjkgleagq[eiusmod'
  };
  id: string;

  @ViewChild('count') countRef: HTMLInputElement;

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
   this.id = this.route.snapshot.params['id'];

  }
  changeCount( dir: string): void {
    const arg = dir === '+' ? 1 : -1;
    console.dir( this.countRef.nativeElement.value );
    this.countRef.value	 += arg;
  }

}
