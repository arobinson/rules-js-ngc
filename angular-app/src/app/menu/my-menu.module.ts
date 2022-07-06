import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MyMegaMenuComponent } from './my-menu.component';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [MyMegaMenuComponent],
  exports: [MyMegaMenuComponent]
})
export class MyMegaMenuModule {}
