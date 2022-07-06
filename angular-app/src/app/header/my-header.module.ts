import { NgModule } from '@angular/core';
import { MyMegaMenuModule } from '../menu/my-menu.module';
import { MyHeaderComponent } from './my-header.component';

@NgModule({
  imports: [MyMegaMenuModule],
  declarations: [MyHeaderComponent],
  exports: [MyHeaderComponent]
})
export class MyHeaderModule {}
