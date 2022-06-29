import { NgModule } from '@angular/core';
import { NwMegaMenuModule } from 'src/app/mega-menu/nw-mega-menu.module';
import { NwHeaderComponent } from './nw-header.component';

@NgModule({
  imports: [NwMegaMenuModule],
  declarations: [NwHeaderComponent],
  exports: [NwHeaderComponent]
})
export class NwHeaderModule {}
