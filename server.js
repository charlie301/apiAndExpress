/*
     Main server to handle site pages and API calls
*/
var express = require('express');
var server = express();
var async = require('async');
var weatherReq = require('./weatherRequest.js');

var currentWeatherholder = [];

server.set('view engine','ejs');

server.get('/',function(req,res){
     res.render('./charlie/main');
})

server.get('/weather',function(req,res){
          var d = weatherReq.getCurrentWeather();
          res.render('weather', {
               title: 'Weather statistics',
               stats: ["Sunny", 0.34, "12 July"]
          });
     });

//handle weather api requests ----- [Simple current || 5day]
server.get('/weather/:state?/:country?',function(req,res){
     var state = req.params.state;
     var country = req.params.country;
     //res.send('Requested by ' + country + ' , and state of req is ' + state);
     if(!country){
          //res.send('Will be using London as default');
     }
     if(req.params.state !== 'current' || req.params.state !== 'fiveDay'){
          res.send('<h1>Incorrect state request - please check the API');
     }
});

//handle weather API ------- [Best day for meetup after work]
server.get('/bestday/:country',function(req,res){
     //code to go in here
});

/*
server.get('/',function(request,response){
     currentWeatherholder = weatherReq.getCurrentWeather();
     response.send(currentWeatherholder);
     console.log(currentWeatherholder);
     //response.render('default', {title: 'badboy'});
});
*/


server.listen(3000, function(){
     console.log('listening on port 3000')
});
