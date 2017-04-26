import React, { Component } from 'react';
import  { connect } from 'react-redux';
// Просмотр отдельно каждого

import ListGroup from 'react-bootstrap/lib/ListGroup';
import {Grid, Row, Col, Clearfix, FormGroup, FormControl, Form} from 'react-bootstrap';

import ZoneItem from '../ZoneItem';
import CounterGrid from '../CounterGrid';

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
            //console.log(ch_1);
            //console.log(' this.props.zoneList.map ', this.props.zoneList);
            return (
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            {/*<input type="text" placeholder="Введите название зоны" className="form-control" onChange={this.handleSearch.bind(this)} />*/}
                            <FormGroup bsSize="large">
                                <FormControl type="text" placeholder="Введите название зоны" onChange={this.handleSearch.bind(this)} />
                            </FormGroup>
                                     <ListGroup>
                                     {
                                         this.props.zoneList.map((zone, index) =>
                                             <ZoneItem
                                                 key={zone.id}
                                                 onClick={this.handlePreviewClick.bind(this, zone)}
                                                 title={zone.zone_descr}               />
                                         )
                                     }
                                     </ListGroup>
                        </Col>
                        <Col xs={6} md={8}>
                            Выбранные зоны для отслеживания репопов:
                            <CounterGrid counters={ch_1}/>
                        </Col>
                    </Row>
                </Grid>


                // <div className='col-md-12'>
                //     <div className='col-xs-6  col-md-4'>
                //         <input type="text" placeholder="Введите название зоны" className="form-control" onChange={this.handleSearch.bind(this)} />
                //         <ListGroup>
                //         {
                //             this.props.zoneList.map((zone, index) =>
                //                 <ZoneItem
                //                     key={zone.id}
                //                     onClick={this.handlePreviewClick.bind(this, zone)}
                //                     title={zone.zone_descr}               />
                //             )
                //         }
                //         </ListGroup>
                //     </div>
                //     <div className='col-xs-12 col-md-8'>
                //         Выбранные зоны для отслеживания репопов:
                //         <CounterGrid counters={ch_1}/>
                //     </div>
                // </div>
            );
        }
}

function mapStateToProps(state) {
    return {
        storeCounters: state.cList,
        zoneList: state.zList
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