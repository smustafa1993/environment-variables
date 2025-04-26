const express = require('express');
const logger= require('morgan')


const app = express();

app.use(logger('dev'))


app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
