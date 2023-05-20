import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];

  selectedCity: data | null = null;

  ngOnInit() {}

  findCity(value) {
    const city = value.target.value;
    this.selectedCity = this.weatherData.find(q => q.name === city);
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
