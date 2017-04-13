import React, { Component } from 'react';
import  { connect } from 'react-redux';
// Просмотр отдельно каждого

import ZoneItem from './ZoneItem.jsx';
import CounterGrid from './CounterGrid.jsx';

class TimerPage extends Component {

        constructor(props) {
            super(props);
        }

        // Добавление зоны в список таймеров counterItemList
        handlePreviewClick(zone) {
            this.props.onHandlePreviewClick(zone); //redux-проброс
         }

        // Поиск зон в списке zoneItemList
        handleSearch(e) {
            let searchQuery = e.target.value.toLowerCase();
            this.props.onHandleSearch(searchQuery);
        }

        render() {
            let ch_1 = this.props.storeCounters;
            //console.log(' this.props.zoneList.map ', this.props.zoneList);
            return (
                <div className='col-md-12'>
                    <div className='col-xs-6  col-md-4'>
                        <input type="text" placeholder="Введите название зоны" className="form-control" onChange={this.handleSearch.bind(this)} />
                        {
                            this.props.zoneList.map((zone, index) =>
                                <ZoneItem
                                    key={zone.id}
                                    onClick={this.handlePreviewClick.bind(this, zone)}
                                    title={zone.zone_descr}               />
                            )
                        }
                    </div>
                    <div className='col-xs-12 col-md-8'>
                        Выбранные зоны для отслеживания репопов:
                        <CounterGrid counters={ch_1}/>
                    </div>
                </div>
            );
        }
}

function mapStateToProps(state) {
    return {
        storeCounters: state.countList,
        zoneList: state.zoneList
    }
}

//export default TimerPage;
export default connect(mapStateToProps,
    dispatch => ({
        onHandlePreviewClick: (zone) => {
            dispatch({ type: 'ADD_COUNTER', zone: zone});
        },
        onHandleSearch: (zone) => {
            dispatch({ type: 'FIND_ZONE', zone: zone});
        }
    })
)(TimerPage);