import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({onStart, onStop, onMark, onReset}) => {
  return (
    <div className="controls">
      <div>
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
        <button onClick={onMark}>Mark</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onMark: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Controls;
