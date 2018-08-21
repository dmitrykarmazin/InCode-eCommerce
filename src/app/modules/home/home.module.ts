import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductService } from '../../core/services/product.service';
import { CustomMaterialModule } from '../custom-material/custom-material.module';


@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [HomeComponent, ProductComponent, ProductItemComponent],
  providers: [ ProductService ],
  declarations: [HomeComponent, ProductComponent, ProductItemComponent]
})
export class HomeModule { }
