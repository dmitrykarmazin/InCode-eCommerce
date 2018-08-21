import { HomeComponent } from './modules/home/components/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CustomMaterialModule } from './modules/custom-material/custom-material.module';

import { StoreModule } from '@ngrx/store';
import { productReducer } from './core/store/products/product.reducer';


import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './core/store/products/product.effect';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    // material

    //
    HomeModule,
    StoreModule.forRoot({'product': productReducer} ),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
