import React, { Component }  from 'react';
import classNames from 'classnames';
import  { connect } from 'react-redux';

import { Panel,ButtonToolbar, Button, ProgressBar }  from 'react-bootstrap';

class CounterItem extends Component {

    constructor(props) {
        super(props);
        this.state = {elapsed: 0, procent:0} ;
        this.delete_timers = this.delete_timers.bind(this);
        this.timer_start = this.timer_start.bind(this);
        this.timer_stop = this.timer_stop.bind(this);
        this.tick = this.tick.bind(this);
    }



    componentWillUnmount() {

        if (this.timer>0) {
            clearInterval(this.timer);
            console.log('[delete] таймер при закрытие зоны: ', this.timer);
        }
    }

    timer_start(){

        console.log('[current] таймер',this.timer)
        // если таймер уже существует, то дропаем его, и создаем новый
        if (this.timer) this.timer_stop();
        // componentDidMount вызывается react'ом, когда компонент
        // был отрисован на странице. Мы можем установить интервал здесь:
        this.start2 = Date.now() + this.props.timer*60;
        this.timer = setInterval(this.tick, 1000);
        console.log('[create] таймер: ',this.timer);
    }

    timer_stop(){

        // Этот метод вызывается сразу после того, как компонент удален
        // со страницы и уничтожен. Мы можем удалить интервал здесь:
        console.log('[delete] таймер: ',this.timer);
        clearInterval(this.timer);
    }

    tick(){
        //console.log('таймер: ',this.timer, ' прошло: ',Math.round(this.state.elapsed / 1000), ' из ', this.props.timer*60);
        //console.log('финиш на: ', this.props.timer*60);
        //console.log(this);
        if ( this.props.timer*60 > Math.round(this.state.elapsed / 1000) ) {
            this.setState({
                elapsed: new Date() - this.start2,

            });
        } else {
            clearInterval(this.timer);
            console.log('закончили считать, счетчик грохнули');
        }

    }
    delete_timers(){
        let zoneId = this.props.id;
        this.props.onDelete_timers(zoneId);
        // console.log(zoneId);
        // console.log('this: ',this.props.storeCounters);
    }


    render() {
        let elapsed = Math.round(this.state.elapsed / 1000);

        // Это даст нам число с одной цифрой после запятой dot (xx.x):
        let seconds = elapsed.toFixed(0);
        //let seconds = Math.round(this.state.elapsed / 1000).toFixed(0);
        let procent = ((seconds*100)/(this.props.timer*60)).toFixed(2);
        let aa = this.props.timer*60 - elapsed;
        let mm = (Math.floor( (aa/60) % 60 )) < 10 ? '0' + Math.floor( (aa/60) % 60 ) : Math.floor( (aa/60) % 60 );
        let ss = (Math.floor( aa % 60 )) < 10 ? '0' + Math.floor( aa % 60 ) : Math.floor( aa % 60 );
        // Хоть мы и возвращаем целый <p> элемент, react разумно обновит
        // только измененные части, содержащие переменную seconds.
        // const { key, title } = this.props;

        const title = (
            <h3>( {this.props.children} ) {this.props.title} </h3>
        );

        const divStyle = {
            marginBottom: 0+'px'
        };

        const buttonStyle = {
            marginTop: -47+'px',
            color: '#2b3e50'
        };

        return (
                <Panel header={title} bsStyle="success">
                    {/*<button name="start" className="btn btn-success" onClick={this.timer_start}>старт</button>*/}
                    {/*<button name="stop" className="btn btn-success" onClick={this.timer_stop}>стоп</button>*/}
                    <button type="button" className="close" aria-label="Close" onClick={this.delete_timers} style={buttonStyle}>[x]</button>
                    <ButtonToolbar>
                        <Button bsStyle="info" bsSize="lg" disabled>{mm} : {ss}</Button>
                        <Button bsStyle="success" bsSize="lg"onClick={this.timer_start}>Старт</Button>
                        <Button bsStyle="danger" bsSize="lg" onClick={this.timer_stop}>Стоп</Button>
                    </ButtonToolbar><br />
                    {/*Прошло <b>{elapsed} секунд </b> из {this.props.timer*60} --- {mm} : {ss} ---*/}
                    <ProgressBar striped bsStyle="info" now={parseInt(procent)} style={divStyle} />
                </Panel>
        );
    }
};

//export default CounterItem;
function mapStateToProps(state) {
    return { storeCounters: state.cList }
}

//export default TimerPage;
export default connect(mapStateToProps,
    dispatch => ({
        onDelete_timers: (id) => {
            dispatch({ type: 'DEL_COUNTER', id: id});
        }
    })
)(CounterItem);
