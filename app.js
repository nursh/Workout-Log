const express = require('express');
const helmet = require('helmet');
const ms = require('ms');
const path = require('path');
const bodyParser = require('body-parser');
const data = require('./assets/workout-data.json');
// const mongoose = require('mongoose');
const morgan = require('morgan');


const port = process.env.PORT || 3000;
const app = express();
app.use(helmet());
app.use(helmet.hsts({
  maxAge: ms('1y'),
  includeSubDomains: true,
  preload: true,
}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.disable('x-powered-by');
app.use(morgan('tiny'));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/data', (req, res) => {
  res.status(200).json(data);
});

app.post('/post/form', (req, res) => {
  res.status(200).json(req.body);
});

app.listen(port, () => console.log(`App is running on port:${port}`));
