import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
