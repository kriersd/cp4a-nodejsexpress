const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! This is Dave K 2");
});

module.exports.app = app;
