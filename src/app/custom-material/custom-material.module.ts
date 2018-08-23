import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule
  ],
  exports: [ CommonModule, MatCardModule , MatGridListModule , MatButtonModule, MatToolbarModule, FlexLayoutModule, MatInputModule]
})
export class CustomMaterialModule {}
