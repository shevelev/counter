import React, { Component } from 'react';
import classNames from 'classnames';
import Progress from 'react-progressbar';

import './CounterItem.less';

const countItem = ({timer, title, id}) => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         elapsed: 0,
    //         procent: 0,
    //         date: new Date()
    //     };
    // }

    let start2 = '';


    const timer_start = () => {
        // componentDidMount вызывается react'ом, когда компонент
        // был отрисован на странице. Мы можем установить интервал здесь:
        start2 = Date.now() + timer*60;
        //timer = setInterval(tick(), 1000);

        console.log('this-start', this);
        tick();
        // console.log('присоединили st', this.start2);
    }
    const timer_stop = () => {
        clearInterval(timer);
    }

    const tick = () => {
        console.log('this-tick', this);
        setState((prevState, props) => ({
            date: new Date()
        }));
    }

    const delete_timers = () => {
        console.log('this-delete', this);
        // let noteId = this.props.id;
        // console.log(noteId);
    }


        let elapsed = 0//Math.round(this.state.elapsed / 2000);
        // Это даст нам число с одной цифрой после запятой dot (xx.x):
        let seconds = elapsed.toFixed(0);
        let procent = ((seconds*100)/(timer*60)).toFixed(2);
        // Хоть мы и возвращаем целый <p> элемент, react разумно обновит
        // только измененные части, содержащие переменную seconds.
        const divStyle = {
            color: 'blue',
            width: procent+'%',
        };

        return (
            <div>
                <div className='bg-success'>
                    <button type="button" className="close" aria-label="Close" onClick={delete_timers}>[x]</button>
                    <p className="bg-danger"> ( {id} --) {title} </p>
                    {/*<mark>репоп {this.props.timer} минут</mark>*/}
                    <button name="start" className="btn btn-success" onClick={timer_start}>Запустить таймер</button>
                        Прошло <b>{elapsed} секунд </b> из {timer*60} --- {}
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={divStyle}>

                        </div>
                    </div>

               </div>
            </div>
        );

}

export default countItem;
