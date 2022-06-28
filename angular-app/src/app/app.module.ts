import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NwHeaderModule } from './header/nw-header.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NwHeaderModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
}
