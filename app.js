const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello   jjjj from Appsody! This is Dave K ABC");
});

module.exports.app = app;
