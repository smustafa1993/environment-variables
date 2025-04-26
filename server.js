const express = require('express');
const logger= require('morgan');
require('dotenv').config();


const app = express();

app.use(logger('dev'))


app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
  console.log(`Your (not-so) secret password is: ${process.env.SECRET_PASSWORD}`)
});

