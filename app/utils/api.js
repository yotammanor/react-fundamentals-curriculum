import axios from 'axios';

const apiKey = '42e3d00b707d32242cb4a25b96a0d4c2';


module.exports = {
  currentWeather: function (cityName) {
    const url = window.encodeURI('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&type=accurate&APPID=' + apiKey);
    return axios.get(url)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
        return null
      })
  },
  fiveDaysForecast: function (cityName) {
    const numOfResults = 5 * 8;
    const url = window.encodeURI('https://api.openweathermap.org/data/2.5/forecast/?q=' + cityName + '&type=accurate&APPID=' + apiKey + '&cnt=' + numOfResults);
    return axios.get(url)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error);
        return null
      })
  }
};