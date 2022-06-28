import { CommonModule, DecimalPipe, JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NwSharedModule
} from 'nw-shared';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NwSharedModule,
  ],

  declarations: [],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NwSharedModule,
  ],

  providers: [DecimalPipe, JsonPipe]
})
export class SharedModule {}
