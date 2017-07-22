import React from 'react';
import PropTypes from 'prop-types';


const Row = ({ target, row, span, index }) => (
  <tr>
    {(index === 0) ? <td rowSpan={span}>{target.toUpperCase()}</td> : null }
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
    row.activities.map((workout, i) => (
      <Row
        row={workout}
        target={row.target}
        span={row.activities.length}
        index={i}
      />),
    ),
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
