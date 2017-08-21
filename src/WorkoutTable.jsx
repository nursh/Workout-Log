import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';


const Row = props => (
  <tr>
    {(props.dateIndex === 0 && props.index === 0) ?
      <td rowSpan={props.dateSpan}>
        { props.date }</td> :
      null}
    {(props.index === 0) ? <td rowSpan={props.span}>{props.target.toUpperCase()}</td> : null }
    <td>{props.row.name}</td>
    <td>{props.row.sets}</td>
    <td>{props.row.reps}</td>
    <td>{(props.row.weight) ? props.row.weight : '-'}</td>
  </tr>
);


class Table extends React.Component {

  state = {
    data: [],
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/data')
      .then(res => res.json()
      .then(data => this.setState({ data }) ) )
      .catch(err => { throw new Error('Cannot get resource') } )
  }

  render() {
    const dateSpan = this.state.data.map(day =>
      day.workouts.reduce((sum, x) => sum + x.activities.length, 0),
    );

    const rows = this.state.data.map((row, k) =>
      row.workouts.map((day, j) =>
        day.activities.map((workout, i) => (
          <Row
            row={workout}
            target={day.target}
            span={day.activities.length}
            index={i}
            date={row.date}
            dateSpan={dateSpan[k]}
            dateIndex={j}
          />),
        ),
      ),
    );

    return (
      <div>
        <table className="ui celled structured striped orange table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Body Target</th>
              <th>Activity</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <Link
          to="/form">
          <button className="ui right floated orange button">Add Workout</button>
        </Link>
      </div>
    );
  }

}

Row.propTypes = {
  target: PropTypes.string.isRequired,
  span: PropTypes.number.isRequired,
  row: PropTypes.shape({
    name: PropTypes.string,
    sets: PropTypes.number,
    reps: PropTypes.number,
    weight: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Table;
