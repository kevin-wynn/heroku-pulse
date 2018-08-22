# heroku-pulse
an npm package designed to keep your free heroku server awake

## usage
heroku-pulse takes in 2 arguments with a callback function that returns a success or failure message

```javasript
pulse(url, milliseconds, callback());
```

```javascript
const pulse = require('heroku-pulse');

pulse('http://ha-playground.herokuapp.com/', 30000, (res) => {
  console.log(res);
})
```