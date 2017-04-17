import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './navbar/app.navbar.component';
import { AppHeroDetailsComponent } from './details/app.herodetails.component';

@NgModule({
  declarations: [
    AppComponent,AppNavbarComponent,AppHeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,AppNavbarComponent]
})
export class AppModule { }
