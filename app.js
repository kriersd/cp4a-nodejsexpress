const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello FRIDAY from Appsody! This is Dave K ABC");
});

module.exports.app = app;
