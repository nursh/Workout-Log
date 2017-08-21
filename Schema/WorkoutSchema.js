const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: String,
  sets: Number,
  reps: Number,
  weight: Number,
});
const Activity = mongoose.model('Activity', activitySchema);

const workoutSchema = new Schema({
  target: String,
  activities: [activitySchema],
});
const Workout = mongoose.model('Workout', workoutSchema);

const dataSchema = new Schema({
  date: { type: String, Default: new Date().toDateString() },
  workouts: [workoutSchema],
});
const Data = mongoose.model('Data', dataSchema);

module.exports = {
  Activity,
  Workout,
  Data,
};
