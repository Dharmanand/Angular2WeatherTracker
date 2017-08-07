import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { WeatherListComponent } from './weather/weather-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WeatherItemComponent, WeatherListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
