class UI {
  constructor(city) {
    this.city = city;
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.details = document.getElementById('w-details');
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');


    this.cloudy = 801;
  }

  paint(weather) {
    this.location.textContent = weather.name + ', ' + weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.temp.textContent = weather.main.temp + '℃';
    this.feelsLike.textContent = `feels like: ${weather.main.feels_like + ' ℃'}`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity + ' %'}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure + ' hPa'}`
    this.wind.textContent = `Wind speed: ${weather.wind.speed + ' m/s'}`;

    this.switchIcon(weather.weather[0].id)
  }

  switchIcon(weatherID) {
    if(weatherID >= 200 && weatherID <= 232) {
      this.icon.setAttribute('src', '../img/thunderstorm.png');
    } else if(weatherID >= 300 && weatherID <= 321) {
      this.icon.setAttribute('src', '../img/drizzle.png');
    } else if(weatherID >= 500 && weatherID <= 531) {
      this.icon.setAttribute('src', '../img/rain.png');
    } else if(weatherID >= 600 && weatherID <= 631) {
      this.icon.setAttribute('src', '../img/ice.png');
    } else if(weatherID >= 701 && weatherID <= 781) {
      this.icon.setAttribute('src', '../img/fog.png');
    } else if(weatherID === 800){
      this.icon.setAttribute('src', '../img/sun.png');
    } else if(weatherID >= 800 && weatherID <= 802) {
      this.icon.setAttribute('src', '../img/cloud&sun.png');
    } else if(weatherID >= 803 && weatherID <= 804) {
      this.icon.setAttribute('src', '../img/cloud.png');
    } else {
      this.icon.setAttribute('src', '../img/unknown.png');
    }
  }
}