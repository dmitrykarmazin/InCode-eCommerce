import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
// import { CustomMaterialModule } from '../modules/custom-material/custom-material.module';

import { HomeComponent } from './home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer} from './store/reducers/product.reducer';
import { ProductEffects } from './store/effects/product.effect';

import { ProductService } from './services/product.service';

import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule,
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  exports: [HomeComponent, ProductListComponent, ProductItemComponent],
  providers: [ ProductService ],
  declarations: [HomeComponent, ProductListComponent, ProductItemComponent]
})
export class HomeModule { }
