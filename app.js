const city = 'city-input'
const apiKey = 'a2e63e109ef5e39ec0caed175e3283bfae3633dc72c982857186997a3cbe03a4';

function getCityData(city, apiKey) {
const encodedCity = encodedURIComponent(city);
const options = { 
  method: 'GET', 
  headers: { 
    accept: "application/json",
    }
  };

  fetch(`https://api.openaq.org/v2/measurements?city=${encodedCity}`, options) 
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
document.addEventListener("DOMContentLoaded", function() {
  var city = sessionStorage.getItem('city');
  var displayDiv = document.getElementById('city-data');

  if (displayDiv) { // Checking if the displayDiv does not return null before attempting to use the below statements
    var cityHeader = document.createElement('h2');
    cityHeader.textContent = city;
    displayDiv.appendChild(cityHeader);

    getCityData(city);
  }

  var button = document.querySelector('button');

  if (button) { // Checking if the button does not return null before adding the event listener to it
    document.querySelector('button').addEventListener('click', function() {
      var city = document.getElementById('city-input').value;
      sessionStorage.setItem('city', city);
      window.location.href = 'aqiScore.html';
    });
  }
});
