import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const Row = props => (
  <tr>
    {/* {(props.dateIndex === 0) ? <td rowSpan={props.dateSpan}>{props.date}</td> : new Date()} */}
    {(props.j === 0) ? <td rowSpan={props.dateSpan}>{moment().format('dddd, MMMM Do YYYY')}</td> : null}
    {(props.index === 0) ? <td rowSpan={props.span}>{props.target.toUpperCase()}</td> : null }
    <td>{props.row.name}</td>
    <td>{props.row.sets}</td>
    <td>{props.row.reps}</td>
    <td>{(props.row.weight) ? props.row.weight : '-'}</td>
    <td>{(props.row.time) ? props.row.time : '-'}</td>
    <td>{(props.row.distance) ? props.row.distance : '-'}</td>
  </tr>
);


function Table({ data }) {
  const rows = data.map(row =>
    row.workouts.map((day, j) =>
      day.activities.map((workout, i) => (
        <Row
          row={workout}
          target={day.target}
          span={day.activities.length}
          index={i}
          date={row.date}
          dateIndex={j}
          dateSpan={row.workouts.length}
        />),
      ),
    ),
  );
  return (
    <div>
      <table className="ui celled structured striped table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Body Target</th>
            <th>Activity</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Time</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      <button className="ui right floated orange button">Add Workout</button>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Row.propTypes = {
  target: PropTypes.string.isRequired,
  span: PropTypes.number.isRequired,
  row: PropTypes.shape({
    name: PropTypes.string,
    sets: PropTypes.number,
    reps: PropTypes.number,
    weight: PropTypes.number,
    time: PropTypes.number,
    distance: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Table;
