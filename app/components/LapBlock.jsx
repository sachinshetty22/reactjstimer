import React from 'react';
import LapList from "LapList"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class LapBlock extends React.Component {
    genLapList() {
        return (
            <ul class="list-group">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.props.lapList.map(function (listValue) {
                        return <LapList {...listValue} key={listValue.rowNo} />;
                    })}
                </ReactCSSTransitionGroup>
           </ul>

        );
    }

    render() {
        if (this.props.lapList.length) {
            return (
                <div class="row col-xs-14 col-lg-3 col-sm-12 col-md-3 lapblock">
                    <div class="lapheader">
                        <div class="lapheaderblock">
                            <h3 class="pull-left">
                                <span class="lapheaderleft" >Laps</span>
                            </h3>
                            <h3 class="pull-right">
                                <span class="text-right lapheaderright">Splits</span>
                            </h3>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="list-group">
                        {this.genLapList()}
                    </div>
                </div>
            );
        } else {
            return null;
        }


    }
}

