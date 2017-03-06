import React from 'react';
import classNames from 'classnames';
import CounterItem from './CounterItem.jsx';

const CounterGrid = React.createClass({


    render() {

        return (
            <div>
                <div className='title'>
                    Список счетчиков из counters
                    <hr />
                    {
                       this.props.counters.map(function(count) {

                           return <CounterItem
                                key={count.id}
                                id={count.id}
                                title={count.zone_descr}
                                timer={count.zone_timer}
                                start={Date.now()}> {count.id}</CounterItem>
                       })}


                </div>

            </div>
        );
    }
});

export default CounterGrid;
