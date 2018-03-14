import React from 'react';
import PropTypes from 'prop-types';
import {formatMillis} from './util';

const MarkedTimes = ({times, title}) => (
  <div className="marked-times">
    <div>MARKED TIMES</div>
    <ul className="time-list">
      {times.map(t => (
        <li className="time-list-item" key={t}>
          {formatMillis(t)}
        </li>
      ))}
    </ul>
  </div>
);

MarkedTimes.propTypes = {
  times: PropTypes.array.isRequired,
};

export default MarkedTimes;
