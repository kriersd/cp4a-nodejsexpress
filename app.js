const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! It's Dave!!");
});
 
module.exports.app = app;
