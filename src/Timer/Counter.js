import React from 'react';
import PropTypes from 'prop-types';
import {formatMillis} from './util';

const Counter = ({time}) => (
  <div className="counter">
    <div className="elapsed">{formatMillis(time)}</div>
  </div>
);

Counter.propTypes = {
  time: PropTypes.number,
};

export default Counter;
