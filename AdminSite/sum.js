var http = require("http");
var url = require("url");
var sum;
var twilio = require('twilio');
var accountSid = 'ACa2c83dc5fad1a4c48dce2ca2de4853f8'; // Your Account SID from www.twilio.com/consol
var authToken = '57febbef17ce0ec3e386bf9966014c5d';
var abc;
var twilio = require('twilio');
var params
var client = new twilio(accountSid, authToken);

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    params = url.parse(request.url,true).query;

    //console.log(params);

    var abc = params.number1;
    //var b = params.number2;

    //var numA = new Number(a);
    //var numB = new Number(b);

    //var sum = new Number(numA + numB).toFixed(0);

    // response.write(a);
    response.end();
    client.messages.create({
    body: abc,
    to: '+14849298853',  // Text this number
    from: '+12563048106' // From a valid Twilio number
})
 .then((message) => console.log(message.sid));
}).listen(8096);


