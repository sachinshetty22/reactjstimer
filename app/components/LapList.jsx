import React from 'react';
import formatTime from "minutes-seconds-milliseconds";
export default class LapList extends React.Component {
    render() {
        return (

           
                <li class="list-group-item laprow">
                    <div class="pull-left laprownum">
                        <span>{this.props.rowNo}</span>
                    </div>
                    <div class="pull-left laprowlap">
                        <span>{formatTime(this.props.rowLap)}</span>
                    </div>
                    <div class="pull-right laprowsplit">
                        <span class="text-right">{formatTime(this.props.rowSplit)}</span>
                    </div>
                    <div class="clearfix"></div>
                </li>

            
        );
    }
}