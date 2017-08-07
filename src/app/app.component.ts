import { Component } from '@angular/core';
import {WeatherListComponent} from "./weather/weather-list.component";

@Component({
  selector: 'my-app',
  template: `<header><h1>{{name}}</h1></header>
  <br/>
            <weather-list></weather-list>`
})
export class AppComponent  { name = 'Weather App'; }
