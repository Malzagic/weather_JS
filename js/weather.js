class Weather {
  constructor(city) {
    this.city = city;
    // paste api_key code
    this.API_key = '';
    this.part = 'daily';
    this.units = 'metric'
  }


  // Fetch wather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_key}&units=${this.units}`);

    const responseData = await response.json()

    return responseData;
  }

  // change weather location
  changeLocation(city) {
    this.city = city;
  }
}