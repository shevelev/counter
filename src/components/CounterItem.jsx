import React from 'react';
import classNames from 'classnames';
import Progress from 'react-progressbar';

import './CounterItem.less';

const CounterItem = React.createClass({

    getInitialState: function(){
        return {elapsed: 0, procent:0};
    },

    timer_start: function(){

        console.log('[current] таймер',this.timer)
        // если таймер уже существует, то дропаем его, и создаем новый
        if (this.timer) this.timer_stop();
        // componentDidMount вызывается react'ом, когда компонент
        // был отрисован на странице. Мы можем установить интервал здесь:
        this.start2 = Date.now() + this.props.timer*60;
        this.timer = setInterval(this.tick, 1000);
        console.log('[create] таймер: ',this.timer);
    },

    timer_stop: function(){

        // Этот метод вызывается сразу после того, как компонент удален
        // со страницы и уничтожен. Мы можем удалить интервал здесь:
        console.log('[delete] таймер: ',this.timer);
        clearInterval(this.timer);
    },

    tick: function(){

        // Эта функция вызывается каждые 50мс. Она обновляет
        // счетчик затраченного времени. Вызов setState заставляет компонент перерисовываться

        //this.setState({elapsed: new Date() - this.props.start});
        this.setState({
            elapsed: new Date() - this.start2,

        });
    },
    delete_timers: function(){
        let noteId = this.props.id;
        // var newNotes = this.state.counters.filter(function(note) {
        //     return note.id !== noteId;
        // });
        console.log(noteId);
        // this.setState({ counters: newNotes });
    },


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
                        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={divStyle}>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

export default CounterItem;
