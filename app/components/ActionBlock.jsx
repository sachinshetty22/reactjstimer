import React from 'react';

export default class ActionBlock extends React.Component {
    render() {
        let startActionState = {};
        let resetActionState = {};
        if (this.props.isTimerRunning) {
            startActionState = {
                name: "Pause",
                icon: "glyphicon-pause",
                colorClass: "btn-primary"
            }
            resetActionState = {
                name: "Lap",
                icon: "glyphicon-flag",
                colorClass: "btn-warning"
            }
        } else {
            startActionState = {
                name: "Start",
                icon: "glyphicon-play",
                colorClass: "btn-success"
            }
            resetActionState = {
                name: "Reset",
                icon: "glyphicon-repeat",
                colorClass: "btn-danger"
            }
        }
        resetActionState.button = "";
        console.log(this.props.timerValue);
        if (this.props.timerValue !== 0 && !this.props.isTimerRunning) {
            startActionState.name = "Resume";
        }
        if(this.props.timerValue === 0) {
            resetActionState.button = "disabled"
        }

        return (
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 text-center actionblock">
                <div class="col-xs-5 col-sm-5 col-lg-5 col-md-5">
                    <button type="button" class={`btn ${startActionState.colorClass} btn-lg pull-right`} onClick={this.props.onClickStart}>
                        <span class={`glyphicon ${startActionState.icon}`} aria-hidden="true"></span> {startActionState.name}
                    </button>
                </div>

                <div class="col-xs-2 col-sm-2 col-lg-2 col-md-2">
                </div>
                <div class="col-xs-5 col-sm-5 col-lg-5 col-md-5">
                    <button type="button" class={`btn ${resetActionState.colorClass}  ${resetActionState.button} btn-lg pull-left`} onClick={this.props.onClickStop}>
                        <span class={`glyphicon ${resetActionState.icon}`} aria-hidden="true"></span> {resetActionState.name}
                    </button>
                </div>
            </div>
        );
    }
}