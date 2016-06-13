//Things to include

//png image to match in the image files for each parsedStats.name
//
//

var http = require('http');
var https = require('https');
var moment =  require('moment');
var request = require('request');

var bodyBuild = {};


const QUERY = 'api.openweathermap.org/data/2.5/forecast?q=';
var location = 'London,us'
const MODE = '&mode=JSON'
const KEY = '3630b8bbc7dfc6e841f7387ec0db6ac9';

function errorCheck(req){
     //check for errors in API request
}

//Request weather information - static stub being used for testing
function callToWeatherApi(){
     request('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3630b8bbc7dfc6e841f7387ec0db6ac9',
              function(error,response,body){
                   if(!error && response.statusCode == 200){
                      return callFormatDaily(body);
                   }
              });
}

//Recieve JSON object from API and split relevant information into array
function callFormatDaily(body){
     var currentData = [];
     var parsedStats = JSON.parse(body);
     currentData.push(moment.unix(parsedStats.dt).format('DD MMMM HH'));
     currentData.push(parsedStats.name);
     currentData.push(parsedStats.weather[0].main);
     currentData.push(parsedStats.weather[0].description);
     currentData.push(parsedStats.main.temp);
     currentData.push(parsedStats.main.humidity);
     currentData.push(parsedStats.main.temp_min);
     currentData.push(parsedStats.main.temp_max);
     currentData.push(moment.unix(parsedStats.sys.sunrise).format(''));
     currentData.push(moment.unix(parsedStats.sys.sunset).format(''));
     return currentData;
}

//export to reference inner methods
var weatherRequest = {

     getCurrentWeather: function(){
          return callToWeatherApi();
     },

     getFiveDayForecast: function() {
          //Retrieve 5 day forecast
     },

     getBestDayToMeetAfterWork: function() {
          //Retrieve 5 day
          //calculate best day
          //send back
     },

     getBestDaytoDoLuandry: function(){
          //Retrieve 5 day
          //calculate worst day
          //send back
     }

}

module.exports = weatherRequest;

//var some = weatherRequest.getCurrentWeather();



/*
var t = moment.unix(1406106000).format("MM/DD/YY");
console.log(moment.unix(1406106000).format("MM/DD/YY"));
console.log(moment.unix(1406106000).format("DD MMMM HH"));
console.log(moment.unix(1406106000).format("MM/DD/YY"));
console.log(moment().format("DD MMMM HH"));


/* - Possible use for further adaptation
Object.keys(parsedStats).forEach(function(prop){
     console.log('Iteration Number ' + i + '\n');
     console.log('prop : ' + prop + '     ' + 'parsedStats[prop] : ' + parsedStats[prop]);
     console.log('\n\n');
}) */
