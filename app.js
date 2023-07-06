const city = 'city-input'
const apiKey = 'a2e63e109ef5e39ec0caed175e3283bfae3633dc72c982857186997a3cbe03a4';

function getCityData(city, apiKey) {
const options = { 
  method: 'GET', 
  headers: { 
    accept: "application/json",
    'Authorization': `Bearer ${apiKey}`
    }
  };

  fetch(`https://api.openaq.org/v2/measurements?city=$(city)`, options) 
    .then(response => response.json())
    .then(data => {
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
  var cityHeader = document.createElement('h2');
  cityHeader.textContent = city;
  displayDiv.appendChild(cityHeader);

  document.querySelector('button').addEventListener('click', function() {
    var city = document.getElementById('city-input').value;
    getCityData(city);
    window.location.href = 'aqiScore.html';
  });
});
