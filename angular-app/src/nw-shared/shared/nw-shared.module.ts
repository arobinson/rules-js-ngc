import { NgModule } from '@angular/core';
import { NwButtonModule } from './nw-button/nw-button.module';

@NgModule({
  imports: [NwButtonModule],
  exports: [NwButtonModule]
})
export class NwSharedModule {}
