import React, { Component } from 'react';
import  { connect } from 'react-redux';
// Просмотр отдельно каждого

import ZoneItem from './ZoneItem.jsx';
import CounterGrid from './CounterGrid.jsx';

// json
import zones from '../zones.json';
import z2 from '../zones.json';


// стили
import './ZoneList.less';


class TimerPage extends Component {

        constructor(props) {
            super(props);
            this.state = {
                zones: z2
            };
        }

            // Добавление зоны в список таймеров counterItemList
        handlePreviewClick(zone) {
            //добавляем id зоны в список
            this.props.onHandlePreviewClick(zone); //redux-проброс
        }

        // Поиск зон в списке zoneItemList
        handleSearch(e) {
            let searchQuery = e.target.value.toLowerCase();
            //console.log('Запрос: ',searchQuery);
            let qwe = zones.filter((el) => {
                let searchValue = el.zone_descr.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
            });

            this.setState(() => ({
                zones: qwe
            }));
        }

        render() {
            const { zones } = this.state;
            //console.log('Списки счетчиков_1: ', this.props.storeCounters);

            let ch_1 = this.props.storeCounters;

            return (
                <div className='col-md-12'>
                    <div className='col-xs-6  col-md-4'>

                        <input type="text" placeholder="Введите название зоны" className="form-control" onChange={this.handleSearch.bind(this)} />

                        {
                            zones.map((zone, index) =>
                                <ZoneItem
                                    key={zone.id}
                                    onClick={this.handlePreviewClick.bind(this, zone)}
                                    title={zone.zone_descr}               />
                            )
                        }

                    </div>
                    <div className='col-xs-12 col-md-8'>
                        Сюда будем кидать выбранные счетчики
                        <CounterGrid counters={ch_1}/>
                        {/*<CounterGrid counters={this.state.counters} key={Date.now()}/>*/}
                    </div>
                </div>
            );
        }
}

function mapStateToProps(state) {
    return { storeCounters: state.countList }
}

//export default TimerPage;
export default connect(mapStateToProps,
    dispatch => ({
        onHandlePreviewClick: (zone) => {
            dispatch({ type: 'ADD_COUNTER', name: zone});
        }
    })
)(TimerPage);