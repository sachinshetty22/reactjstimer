import React from 'react';
import formatTime from "minutes-seconds-milliseconds";
export default class TimerBlock extends React.Component {
  render() {
    return (
      <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center timeblock">
        <h1 class="timevalue">{formatTime(this.props.timerValue) }</h1>
      </div>
    )
  }
}

