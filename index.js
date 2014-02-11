var twitter = require('twitter-ng');
var settingsFile = "./settings";
var settings = require(settingsFile);

var twit = new twitter({
  consumer_key: settings.consumer_key,
  consumer_secret: settings.consumer_secret,
  access_token_key: settings.access_token_key,
  access_token_secret: settings.access_token_secret
});

twit.getUserTimeline({
  screen_name: "andypiper",
  trim_user: 0,
  since_id: 1
}, function(err, cb) {
  if (cb) {
    console.log(cb[0].user);
  }
  if (err) {
    return console.error(err);
  }
});
