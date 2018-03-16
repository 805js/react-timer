import React from 'react';
import './Timer.css';
import Counter from './Counter';
import Controls from './Controls';
import MarkedTimes from './MarkedTimes';

const Header = () => <div className="header">REACT TIMER</div>;

export default class Timer extends React.Component {
  INCREMENT = 25;

  state = {
    time: 0.0,
    markedTimes: [],
    interval: null,
  };

  incrementCounter = () => {
    this.setState(state => {
      return {
        ...state,
        time: state.time + this.INCREMENT,
      };
    });
  };

  clearInterval = () => {
    window.clearInterval(this.state.interval);
    return null;
  };

  onStart = () => {
    if (this.state.interval) return;
    this.setState(state => {
      return {
        ...state,
        interval: window.setInterval(this.incrementCounter, this.INCREMENT),
      };
    });
  };

  onStop = () => {
    if (!this.state.interval) return;

    this.setState(state => ({
      ...state,
      interval: this.clearInterval(),
    }));
  };

  onMark = () => {
    if (!this.state.interval) return;

    this.setState(state => {
      const newTimes = state.markedTimes;
      newTimes.push(state.time);
      return {
        ...state,
        markedTimes: newTimes,
      };
    });
  };

  onReset = () => {
    this.setState(state => ({
      ...state,
      time: 0,
      markedTimes: [],
      interval: this.clearInterval(),
    }));
  };

  render() {
    const {time, markedTimes, interval} = this.state;
    return (
      <div>
        <Header />
        <div className={`timer ${interval && 'timer-running'}`}>
          <div>
            <Counter time={time} />
            <Controls
              onStart={this.onStart}
              onStop={this.onStop}
              onMark={this.onMark}
              onReset={this.onReset}
            />
          </div>
          <MarkedTimes times={markedTimes} />
        </div>
      </div>
    );
  }
}
