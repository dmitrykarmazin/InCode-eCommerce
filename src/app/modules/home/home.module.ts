import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent, ProductComponent]
})
export class HomeModule { }
