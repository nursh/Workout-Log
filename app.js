const express = require('express');
const helmet = require('helmet');
const ms = require('ms');
const path = require('path');
const data = require('./assets/workout-data.json');


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

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/api/data', (req, res) => {
  res.status(200).json(data);
});

app.listen(port, () => console.log(`App is running on port:${port}`));
