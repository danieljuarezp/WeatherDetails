import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];

  showData = false;
  selectedCity: data | undefined = undefined;

  ngOnInit() {}

  findCity(value) {
    this.showData = true;
    const city = value.target.value;
    this.selectedCity = this.weatherData.find(q => q.name.toLowerCase() === city.toLowerCase());
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
