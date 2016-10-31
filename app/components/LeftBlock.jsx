import React from 'react';
import TimerBlock from 'TimerBlock';
import ActionBlock from 'ActionBlock';
export default class LeftBlock extends React.Component {
  render() {
     const { onClick } = this.props;
    return (
      <div class="row col-xs-14 col-sm-12 col-md-9 col-lg-9 ">
        <TimerBlock timerValue={this.props.timerValue} />
        <ActionBlock {...this.props} />
      </div>
    );
  }
}


