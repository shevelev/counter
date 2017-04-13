import React, { Component }  from 'react';
import classNames from 'classnames';
import Progress from 'react-progressbar';
import  { connect } from 'react-redux';

//const CounterItem = React.createClass({
let elapsed = 0;
let procent = 0;

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
        let procent = ((seconds*100)/(this.props.timer*60)).toFixed(2);
        // Хоть мы и возвращаем целый <p> элемент, react разумно обновит
        // только измененные части, содержащие переменную seconds.
        const divStyle = {
            color: 'blue',
            width: procent+'%',
        };
        // const { key, title } = this.props;

        return (
            <div>
                <div className='bg-success'>
                    <button type="button" className="close" aria-label="Close" onClick={this.delete_timers}>[x]</button>
                    <p className="bg-danger"> ( {this.props.children} ) {this.props.title} </p>
                    {/*<mark>репоп {this.props.timer} минут</mark>*/}
                    <button name="start" className="btn btn-success" onClick={this.timer_start}>старт</button>
                    <button name="start" className="btn btn-success" onClick={this.timer_stop}>стоп</button>
                    Прошло <b>{elapsed} секунд </b> из {this.props.timer*60}
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={divStyle}></div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
};

//export default CounterItem;
function mapStateToProps(state) {
    return { storeCounters: state.countList }
}

//export default TimerPage;
export default connect(mapStateToProps,
    dispatch => ({
        onDelete_timers: (id) => {
            dispatch({ type: 'DEL_COUNTER', id: id});
        }
    })
)(CounterItem);
