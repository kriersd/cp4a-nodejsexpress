const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! This is Dave K");
});

module.exports.app = app;
