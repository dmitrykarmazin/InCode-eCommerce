import { Component, OnInit } from '@angular/core';

import { Product } from '../../../home/models/product';


interface User {
  firstName: string;
  lastName: string;
  email: string;
  savedFavoriteProducts: Product[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User = null;

  constructor() { }

  ngOnInit() {
  }

}


