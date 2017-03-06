import React from 'react';

// Просмотр отдельно каждого

import ZoneItem from './ZoneItem.jsx';
import CounterGrid from './CounterGrid.jsx';

// json
import zones from '../zones.json';
import z2 from '../zones.json';
// стили
import './ZoneList.less';

const TimerPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            zones: z2,
            counters:  []
        };
    },

    handlePreviewClick(zone) {
        var newCount = this.state.counters.slice();
        newCount.unshift(zone);
        this.setState({ counters: newCount });
        console.log(newCount);
    },

    handleSearch(e) {

        var searchQuery = e.target.value.toLowerCase();
        console.log(searchQuery);
        var qwe = zones.filter(function(el) {
            var searchValue = el.zone_descr.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        console.log(qwe);

        this.setState({
            zones: qwe
        });

    },

    render() {
        const { zones } = this.state;

        return (
            <div className='col-md-12'>
                <div className='col-xs-6  col-md-4'>

                   <input type="text" placeholder="Введите название зоны" className="form-control" onChange={this.handleSearch} />

                    {
                        zones.map(zone =>
                            <ZoneItem
                                key={zone.id}
                                onClick={this.handlePreviewClick.bind(null, zone)}
                                title={zone.zone_descr}               />
                        )
                    }

                </div>
                <div className='col-xs-12 col-md-8'>
                   Сюда будем кидать выбранные счетчики
                    <CounterGrid counters={this.state.counters} />
                </div>

            </div>
        );
    }
});

export default TimerPage;