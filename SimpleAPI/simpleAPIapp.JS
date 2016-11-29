var request = require ("request")
request({
 url: 'http://api.geonames.org/countryCodeJSON',
 qs: {username: 'toyinfashua', formatted: true, lat: 47.03, lng: 10.2, style: "full"}, 
 method: 'POST',
}, function(error, response, body){
 if(error) {
     console.log(error);
 } else {
     console.log(response.statusCode, body);
 }
});