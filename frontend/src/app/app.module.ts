import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // For making HTTP requests

import { AppComponent } from './app.component';  // Import the AppComponent

@NgModule({
  declarations: [
    AppComponent  // Declare AppComponent here
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Include HttpClientModule for HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the AppComponent
})
export class AppModule { }
