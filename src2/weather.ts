class Weather {
  private static instance: Weather;

  private weatherEndpoint: string =
    "https://api.openweathermap.org/data/2.5/weather";
  private geocodingEndpoint: string =
    "https://api.openweathermap.org/geo/1.0/direct";
  private forecastsEndpoint: string =
    "https://api.openweathermap.org/data/2.5/forecast";
  private setting: { [Key: string]: string } = { units: "metric", lang: "it" };
  private apiKey: string = "5b72ddd2e1834656f1b97a90b604a28a";

  constructor() {}

  static getInstance() {
    if (!Weather.instance) {
      Weather.instance = new Weather();
    }
    return Weather.instance;
  }
}
export default Weather;
