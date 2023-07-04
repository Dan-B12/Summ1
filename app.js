const sdk = require('api')('@openaq/v2.0#a2e63e109ef5e39ec0caed175e3283bfae3633dc72c982857186997a3cbe03a4');

function goToScore(city) {
  sessionStorage.setItem('city', city);
  window.location.href = 'AQIScore.html';
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('button').addEventListener('click', function() {
    var city = document.getElementById('city-input').value;
    goToScore(city);
  });
});

async function getCityData(city, apiKey) {
  try {
    const response = await sdk.cities_get_v2_cities_get({
      city: city,
      limit: '100',
      page: '1',
      offset: '0',
      sort: 'asc',
      order_by: 'city'
    }, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
}


module.exports = { goToScore, getCities };
/* $.ajax({
    url: 'https://api.openaq.org/v2/locations',
    method: 'GET',
    headers: {
      'X-API-KEY': 'a2e63e109ef5e39ec0caed175e3283bfae3633dc72c982857186997a3cbe03a4',
      'X-Custom-Header': 'value'
    }
})
*/ 