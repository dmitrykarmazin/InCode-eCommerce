import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [ CommonModule, MatCardModule , MatGridListModule , MatButtonModule]
})
export class CustomMaterialModule {}
