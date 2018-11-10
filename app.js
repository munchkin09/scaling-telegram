var irc = require('irc');
var client = new irc.Client('irc.yourserver.com', 'myNick', {
    channels: ['#channel'],
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

