import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NwMegaMenuComponent } from './nw-mega-menu.component';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [NwMegaMenuComponent],
  exports: [NwMegaMenuComponent]
})
export class NwMegaMenuModule {}
