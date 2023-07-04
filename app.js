const city = encodeURIComponent(cityName);
const apiKey = 'a2e63e109ef5e39ec0caed175e3283bfae3633dc72c982857186997a3cbe03a4'

function getCityData(city) {
  fetch(`https://api.openaq.org/v2/latest?city=${city}`, {
    headers: {
      'Authorization' : 'Bearer ${apiKey}'
    }
  })
      .then(response => response.json())
      .then(data => {
          // Find the div on AQIScore.html to display the air quality data
          var displayDiv = document.getElementById('city-data');

          // Clear any existing data from the div
          displayDiv.innerHTML = '';

          // Create a new h2 element and set its text to the city name
          var cityHeader = document.createElement('h2');
          cityHeader.textContent = city;
          displayDiv.appendChild(cityHeader);

          // Iterate over the results from the API
          data.results.forEach(result => {
              // For each result, create a new p element and set its text to the parameter and value
              result.measurements.forEach(measurement => {
                  var para = document.createElement('p');
                  para.textContent = `${measurement.parameter}: ${measurement.value} ${measurement.unit}`;
                  displayDiv.appendChild(para);
              });
          });
      })
      .catch(err => console.error(err));
}

document.querySelector('button').addEventListener('click', function() {
  var city = document.getElementById('city-input').value;
  getCityData(city);
});