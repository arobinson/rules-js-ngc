import { NgModule } from '@angular/core';
import { NwMegaMenuModule } from '../mega-menu/nw-mega-menu.module';
import { NwHeaderComponent } from './nw-header.component';

@NgModule({
  imports: [NwMegaMenuModule],
  declarations: [NwHeaderComponent],
  exports: [NwHeaderComponent]
})
export class NwHeaderModule {}
