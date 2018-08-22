const http = require('http');

module.exports = (url, mils, cb) => {
  if(mils >= 1.8e+6) cb('Heroku will put your server to sleep after 30 minutes of inactivity. It is recommended you pass a time less than 30 minutes');
  setInterval(() => {
    http.get(url, (res) => {
      const {statusCode} = res;
      if(statusCode !== 200) {
        cb(new Error('There was an error hitting the url provided: ' + url + ' With status code ' + statusCode))
      } else {
        cb('Successfully keeping ' + url + ' awake')
      }
    })
  }, mils)
}