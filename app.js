const express = require('express');
const helmet = require('helmet');
const ms = require('ms');
const path = require('path');
const bodyParser = require('body-parser');
const data = require('./assets/workout-data.json');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Schema = require('./Schema/WorkoutSchema');


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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/workouts', {
  useMongoClient: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const { Activity, Workout, Data } = Schema;

app.get('/api/data', (req, res) => {
  Data.find((err, data) => {
    if (err) console.error(err);

    return res.send(data);
  });
});

app.post('/post/form', (req, res) => {
  const activity = new Activity({
    name: req.body.activity,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight,
  });

  const work = new Workout({
    target: req.body.target,
    activities: activity,
  });

  const data = new Data({
    date: new Date().toDateString(),
    workouts: work,
  });

  Data.findOne({ date: data.date },
    (err, result) => {
      if (err) console.error(err);

      if (result) {
        const workouts = result.workouts;
        const workout = workouts.filter(w => w.target === work.target);
        if (workout.length) {
          const [wk] = workout;
          wk.activities.push(activity);
        } else {
          result.workouts.push(work);
        }
        result.save()
          .then(s => res.send(s))
          .catch(e => console.error(e));
      } else {
        data.save()
          .then(s => res.send(s))
          .catch(e => console.error(e));
      }
    },
  );
});


app.listen(port, () => console.log(`App is running on port:${port}`));

module.exports = app;
