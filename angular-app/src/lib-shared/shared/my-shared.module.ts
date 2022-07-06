import { NgModule } from '@angular/core';
import { MyButtonModule } from './my-button/my-button.module';

@NgModule({
  imports: [MyButtonModule],
  exports: [MyButtonModule]
})
export class MySharedModule {}
