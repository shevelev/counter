import React, { Component } from 'react';
import CounterItem from '../CounterItem';

class CounterGrid extends Component {

    render() {
        return (
            <div>
                <hr />
                {
                       this.props.counters.map(function(count) {

                           return <CounterItem
                                key={count.id}
                                id={count.id}
                                title={count.zone_descr}
                                timer={count.zone_timer}> {count.id}</CounterItem>
                       })}
            </div>
    );
    }
}

export default CounterGrid;
