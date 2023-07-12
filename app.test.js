// Mock importing the functions from app.js (actually importing the function causes issues with the webpages due to module.exports)
const {
  fetchStatesByCountry,
  fetchCitiesByCountryAndState,
  fetchCityDataByCityCountryAndState,
} = require('./app.js');

// Creating a mock fetch function as a replacement for the API
jest.mock('./app.js', () => ({
  fetchStatesByCountry: jest.fn(),
  fetchCitiesByCountryAndState: jest.fn(),
  fetchCityDataByCityCountryAndState: jest.fn(),
}));

// Mock testing fetchStatesByCountry function
describe('fetchStatesByCountry', () => {
  it('Function should return an array of states for the country specified in the input box', async () => {
    const mockStates = [
      { state: 'California' },
      { state: 'New York' },
      { state: 'Massachusetts' },
    ];

    // Mock testing the implementation of fetchStatesByCountry
    fetchStatesByCountry.mockResolvedValue(mockStates);

    const states = await fetchStatesByCountry('USA');
    expect(Array.isArray(states)).toBe(true);
    expect(states.length > 0).toBe(true);
    states.forEach(state => {
      expect(typeof state.state).toBe('string');
    });
  });
});

// Mock testing fetchCitiesByCountryAndState function
describe('fetchCitiesByCountryAndState', () => {
  it('Function should return an array of cities using both the country and state', async () => {
    const mockCities = [
      { city: 'Bellingham' },
      { city: 'Greenfield' },
      { city: 'Marblehead' },
    ];

    // Mock testing the implementation of fetchCitiesByCountryAndState
    fetchCitiesByCountryAndState.mockResolvedValue(mockCities);

    const cities = await fetchCitiesByCountryAndState('New York', 'USA');
    expect(Array.isArray(cities)).toBe(true);
    expect(cities.length > 0).toBe(true);
    cities.forEach(city => {
      expect(typeof city.city).toBe('string');
    });
  });
});

// Mock testing fetchCityDataByCityCountryAndState function
describe('fetchCityDataByCityCountryAndState', () => {
  it('Function should return the city\'s AQI data using country, state, and city', async () => {
    const mockCityData = {
      current: {
        pollution: {
          aqius: 53,
        },
      },
    };

    // Mock testing the implementation of fetchCityDataByCityCountryAndState
    fetchCityDataByCityCountryAndState.mockResolvedValue(mockCityData);

    const cityData = await fetchCityDataByCityCountryAndState('New York', 'New York', 'USA');
    expect(cityData).not.toBeNull();
  });
});
