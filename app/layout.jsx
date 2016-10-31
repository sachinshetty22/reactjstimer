import React from 'react';
import LeftBlock from 'LeftBlock';
import LapBlock from 'LapBlock';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerValue: 0,
            startTime: 0,
            pauseTime: 0,
            previousLap: 0,
            lapList: [],
            isTimerRunning: false
        };
    }


    handleStart(e) {
        e.preventDefault();
        console.log("handleStart");
        if (this.state.isTimerRunning) {
            clearInterval(this.interval);
            this.setState({
                pauseTime: new Date() - this.state.startTime + this.state.pauseTime,
                isTimerRunning: false
            });
            console.log("pausing");
            return;
        }
        console.log("start");
        this.setState({
            startTime: new Date()
        });

        this.interval = setInterval(
            () => {
                this.setState({
                    timerValue: new Date() - this.state.startTime + this.state.pauseTime,
                    isTimerRunning: true
                });
            }, 30
        );
    }

    handleReset(e) {
        e.preventDefault();
        console.log("handleStop");
        if (!this.state.isTimerRunning) {
            clearInterval(this.interval);
            this.setState({
                timerValue: 0,
                startTime: 0,
                pauseTime: 0,
                lapList: [],
                previousLap: 0,
                isTimerRunning: false
            });
            console.log("Reset");
            return;
        }
        const persentTime = new Date() - this.state.startTime + this.state.pauseTime;
        let newLap = {
            rowNo: this.state.lapList.length + 1,
            rowLap: persentTime - this.state.previousLap,
            rowSplit: persentTime
        }
        let tempLapList = this.state.lapList.concat([]);
        tempLapList.splice(0, 0, newLap);
        this.setState({
            previousLap: persentTime,
            lapList: tempLapList
        });


    }
    handleKey(event) {
        console.log(event);
        if (event.keyCode == 32) {
            this.handleStart(event);
        }else if(event.keyCode == 13){
            this.handleReset(event);
        }
    }

    componentWillMount() {

        document.addEventListener("keydown", this.handleKey.bind(this), false);
        
    }
    componentWillUnmount() {

        document.removeEventListener("keydown", this.handleKey, false);
    }

    render() {
        return (
            <div >
                <LeftBlock onClickStart={this.handleStart.bind(this)} onClickStop={this.handleReset.bind(this)} timerValue={this.state.timerValue} isTimerRunning={this.state.isTimerRunning} />
                <LapBlock lapList={this.state.lapList} />
            </div>
        )
    }
}