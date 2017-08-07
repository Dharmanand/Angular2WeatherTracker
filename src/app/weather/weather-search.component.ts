import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <label for="city">City</label>
                <input ngControl="location" type="text" id="city" required>
                <button type="submit">Add City</button>
            </form>
            <div>
                <span class="info">City found:</span> City Name
            </div>
        </section>
    `
})
export class WeatherSearchComponent
{
    onSubmit(form: FormGroup) {
        console.log(form);
    }
}