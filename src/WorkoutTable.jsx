import React from 'react';
import PropTypes from 'prop-types';


const Row = ({ target, row }) => (
  <tr>
    <td>{target.toUpperCase()}</td>
    <td>{row.name}</td>
    <td>{row.sets}</td>
    <td>{row.reps}</td>
    <td>{(row.weight) ? row.weight : '-'}</td>
    <td>{(row.time) ? row.time : '-'}</td>
    <td>{(row.distance) ? row.distance : '-'}</td>
  </tr>
);

function Table({ data }) {
  const rows = data.map(row =>
   row.activities.map(workout => <Row row={workout} target={row.target} />),
  );
  return (
    <table className="ui celled structured striped table">
      <thead>
        <tr>
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
  );
}

Table.propTypes = {
  data: PropTypes.array,
};

Row.propTypes = {
  target: PropTypes.string,
  row: PropTypes.object,
};

export default Table;
