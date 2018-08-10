import axios from 'axios';

const apiKey = '42e3d00b707d32242cb4a25b96a0d4c2';


module.exports = {
  currentWeather: function (cityName) {
    const url = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&type=accurate&APPID=' + apiKey);
    return axios.get(url)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
        return null
      })
  },
  fiveDaysForcast: function (cityName) {
    const url = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/?q=' + cityName + '&type=accurate&APPID=' + apiKey + '&cnt=5');
    console.log(url);
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