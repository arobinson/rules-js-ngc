import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderModule } from './header/my-header.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MyHeaderModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
}
