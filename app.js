$.ajax({
    url: 'https://api.openaq.org/v2/locations',
    method: 'GET',
    headers: {
      'X-API-KEY': 'a2e63e109ef5e39ec0caed175e3283bfae3633dc72c982857186997a3cbe03a4',
      'X-Custom-Header': 'value'
    }
})

const options = {method: 'GET', headers: {accept: 'application/json'}};
fetch('https://api.openaq.org/v2/sources?limit=100&page=1&offset=0&sort=asc&order_by=sourceName', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


const countries = {method: 'GET', headers: {accept: 'application/json'}};
fetch('https://api.openaq.org/v2/countries?limit=200&page=1&offset=0&sort=asc&order_by=country', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



const button = document.getElementById('submit-button');
button.addEventListener('click', function() {
 // Function parameters
    console.log('button clicked');
});

// testing 2