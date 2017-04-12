import React, { Component } from 'react';
import classNames from 'classnames';
import Progress from 'react-progressbar';

import './CounterItem.less';

class countItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            elapsed: 0,
            procent: 0
        };

        this.startCount = this.startCount.bind(this);
        this.timer_start = this.timer_start.bind(this);
        this.delete_timers = this.delete_timers.bind(this);
        this.tick = this.tick.bind(this);

    }

    componentDidMount() {
        console.log('присоединили st ', this.state.elapsed);
        console.log('присоединили pr', this.props);
    }

    componentDidUpdate() {
        console.log('обновление st ', this.state.elapsed);
        console.log('обновление t ', this.start2);
    }


    startCount() {
        console.log('start');
    }

    timer_start(){
        // componentDidMount вызывается react'ом, когда компонент
        // был отрисован на странице. Мы можем установить интервал здесь:
        this.start2 = Date.now() + this.props.timer*60;
        this.timer = setInterval(this.tick(), 1000);
        //this.tick();
        console.log('this-start', this);
        // console.log('присоединили st', this.start2);
    }
    timer_stop(){
        clearInterval(this.timer);
    }

    tick(){
        console.log('this-tick', this);
        this.setState({
            elapsed: new Date() - this.start2,
        });
        // this.setState((prevState, props) => ({
        //     elapsed: new Date() - this.start2
        // }));
    }

    delete_timers(){
        console.log('this-delete', this);
        let noteId = this.props.id;
        console.log(noteId);
    }

    render() {
        let elapsed = Math.round(this.state.elapsed / 2000);
        // Это даст нам число с одной цифрой после запятой dot (xx.x):
        let seconds = elapsed.toFixed(0);
        let procent = ((seconds*100)/(this.props.timer*60)).toFixed(2);
        // Хоть мы и возвращаем целый <p> элемент, react разумно обновит
        // только измененные части, содержащие переменную seconds.
        const divStyle = {
            color: 'blue',
            width: procent+'%',
        };

        return (
            <div>
                <div className='bg-success'>
                    <button type="button" className="close" aria-label="Close" onClick={this.delete_timers}>[x]</button>
                    <p className="bg-danger"> ( {this.props.id}) {this.props.title} </p>
                    {/*<mark>репоп {this.props.timer} минут</mark>*/}
                    <button name="start" className="btn btn-success" onClick={this.startCount}>new</button>
                    <button name="start" className="btn btn-success" onClick={this.timer_start}>old</button>
                        Прошло <b>{elapsed} секунд </b> из {this.props.timer*60}
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={divStyle}>

                        </div>
                    </div>

               </div>
            </div>
        );
    }
}

export default countItem;
