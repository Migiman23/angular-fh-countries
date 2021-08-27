import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CountriesModule } from './countries/countries.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { AppRoutingModule} from './app-routing-module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountriesModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
