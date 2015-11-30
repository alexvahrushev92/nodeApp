/**
 * Created by 1205982 on 30/11/2015.
 */
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'xdB6ezpAKZxWXzJlMN4vSgkZy',
    consumer_secret: 'F9gfZ3tSZYdHat0ApRrEq8avSs4hRTOzg4q6gi0WROKYaM8rar',
    access_token_key: '2273543417-FkYr8myKzYfQvkoB6GSeTt9EFr8QuNYcKfIDTUy',
    access_token_secret: '6CerFW59Fyo9w9uHRHDjybVcuVe6ENm2AbJlItWFikLuX'
});
client.get('search/tweets', {q: 'lolcat', count:'2'}, function(error, tweets){
    console.log(tweets);
});
