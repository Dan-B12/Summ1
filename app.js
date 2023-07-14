const apiKey = 'ee166a13-22ec-4584-9104-1f494495562d';
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// Retrieve the user inputted country element
const countryInput = document.getElementById('country-input');

// Retrieve the user selected state from dropdown
const stateDropdown = document.getElementById('state-dropdown');

// Retrieve the user selected city from dropdown
const cityDropdown = document.getElementById('city-dropdown');

// Checking if we're on the first page
if (window.location.pathname === '/index.html') {
// Hiding the state and city dropdowns to begin with
const countryButton = document.getElementById('country-submit')
const stateButton = document.getElementById('state-submit')
const cityButton = document.getElementById('city-submit')
stateDropdown.style.display = 'none';
cityDropdown.style.display = 'none';
stateButton.style.display = 'none';
cityButton.style.display = 'none';
}

// Function to fetch all states for a country
function fetchStatesByCountry(encodedCountry) {
  const url = `https://api.airvisual.com/v2/states?country=${encodedCountry}&key=${apiKey}`;

  return fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

// Function to fetch all cities within a state
function fetchCitiesByState(encodedState) {
  const url = `https://api.airvisual.com/v2/cities?state=${encodedState}&key=${apiKey}`;

  return fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

// Function to fetch cities for a country and state
function fetchCitiesByCountryAndState(encodedCity, encodedState, encodedCountry) {
  const url = `https://api.airvisual.com/v2/cities?city=${encodedCity}&state=${encodedState}&country=${encodedCountry}&key=${apiKey}`;

  return fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

// Function to fetch city data using city, country and state
function fetchCityDataByCityCountryAndState(encodedCity, encodedState, encodedCountry) {
  const url = `https://api.airvisual.com/v2/city?city=${encodedCity}&state=${encodedState}&country=${encodedCountry}&key=${apiKey}`;

  return fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

// Check if country-submit element exists in the page, as I have multiple html pages
if (document.getElementById('country-submit')) {
  // Event listener for country submitted
  document.getElementById('country-submit').addEventListener('click', function() {
    const selectedCountry = encodeURIComponent(countryInput.value);

    // Fetch states for the inputted country
    fetchStatesByCountry(selectedCountry)
      .then(states => {
        stateDropdown.innerHTML = '';

        // Populate the state dropdown with options from the API
        states.forEach(state => {
          const option = document.createElement('option');
          option.value = state.state;
          option.textContent = state.state;
          stateDropdown.appendChild(option);
        });
        stateDropdown.style.display = 'block';
        document.getElementById('state-submit').style.display = 'block';
        document.getElementById('country-submit').style.display = 'none';
      })
      .catch(error => {
        console.error(error);
      });
  });
}

// Check if state-submit element exists in the page, as I have multiple html pages
if (document.getElementById('state-submit')) {
  // Event listener for state input submission
  document.getElementById('state-submit').addEventListener('click', function() {
    const selectedCountry = encodeURIComponent(countryInput.value);
    const selectedState = encodeURIComponent(stateDropdown.value);
    const selectedCity = encodeURIComponent(cityDropdown.value);

    // Fetch cities for the selected country and state
    fetchCitiesByCountryAndState(selectedCity, selectedState, selectedCountry)
      .then(cities => {
        cityDropdown.innerHTML = '';

        // Populate the city dropdown with all cities in that state
        cities.forEach(city => {
          const option = document.createElement('option');
          option.value = city.city;
          option.textContent = city.city;
          cityDropdown.appendChild(option);
        });
        cityDropdown.style.display = 'block';
        document.getElementById('city-submit').style.display = 'block';
        document.getElementById('state-submit').style.display = 'none';
      })
      .catch(error => {
        console.error(error);
      });
  });
}

// Check if city-submit element exists in the page, as I have multiple html pages
if (document.getElementById('city-submit')) {
  // Event listener for city dropdown submitted by user
  document.getElementById('city-submit').addEventListener('click', function() {
    const selectedCity = encodeURIComponent(cityDropdown.value);
    const selectedState = encodeURIComponent(stateDropdown.value);
    const selectedCountry = encodeURIComponent(countryInput.value);

    // Fetch data for the selected city, using city, country, and state
    fetchCityDataByCityCountryAndState(selectedCity, selectedState, selectedCountry)
      .then(cityData => {
        // Store the selected city and AQI score in localStorage for displaying on aqiScore.html
        localStorage.setItem('selectedCity', selectedCity);
        localStorage.setItem('aqi', cityData.current.pollution.aqius);
        // Navigating to the aqiScore.html page
        window.location.href = `aqiScore.html?selectedCity=${selectedCity}&aqi=${cityData.current.pollution.aqius}`;
      })
      .catch(error => {
        console.error(error);
      });

  });
}