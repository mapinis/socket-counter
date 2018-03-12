const express = require('express');

const app = express();

app.use(require('morgan')('dev'));

app.get('/api/hello', (req, res) => {
  res.send({ server: 'Hello!'});
});

app.listen(8080, () => {console.log("Listening on port 8080")});