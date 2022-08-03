// Init storage
const storage = new Storage();
// Get store location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI();

// Get weather on DOM loaded
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', changeLocationCloseModal);


function changeLocationCloseModal() {
  const city = document.getElementById('city').value;

  // Get weather location and display
  weather.changeLocation(city);
  // Set location in LS
  storage.setLocationData(city)

  getWeather();

  const modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#locModal'));
  modal.hide();
}


function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
