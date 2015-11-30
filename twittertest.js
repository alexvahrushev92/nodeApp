/**
 * Created by 1205982 on 30/11/2015.
 */
var Twitter = require('twitter');
var http = require('http')
var port = process.env.PORT || 1337;

var client = new Twitter({
    consumer_key: 'xdB6ezpAKZxWXzJlMN4vSgkZy',
    consumer_secret: 'F9gfZ3tSZYdHat0ApRrEq8avSs4hRTOzg4q6gi0WROKYaM8rar',
    access_token_key: '2273543417-FkYr8myKzYfQvkoB6GSeTt9EFr8QuNYcKfIDTUy',
    access_token_secret: '6CerFW59Fyo9w9uHRHDjybVcuVe6ENm2AbJlItWFikLuX'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*' });
    client.get('search/tweets', {q: 'lolcats'}, function(error, tweets){
        response.end(JSON.stringify(tweets));
        var json = [];
        for (var i =0; i< tweets.statuses.length ; i++)
            {json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});}
        response.end(JSON.stringify(json));


    });
}).listen(port);


