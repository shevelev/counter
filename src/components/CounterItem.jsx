import React from 'react';
import classNames from 'classnames';
import Progress from 'react-progressbar';

import './CounterItem.less';

const Test = React.createClass({

    getInitialState: function(){

        return {elapsed: 0, procent:0};
    },

    timer_start: function(){
        // componentDidMount вызывается react'ом, когда компонент
        // был отрисован на странице. Мы можем установить интервал здесь:
        this.start2 = Date.now() + this.props.timer*60;
        this.timer = setInterval(this.tick, 1000);
    },

    timer_stop: function(){

        // Этот метод вызывается сразу после того, как компонент удален
        // со страницы и уничтожен. Мы можем удалить интервал здесь:

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
        var noteId = this.props.id;
        // var newNotes = this.state.counters.filter(function(note) {
        //     return note.id !== noteId;
        // });
        console.log(noteId);
        // this.setState({ counters: newNotes });
    },


    render() {
        var elapsed = Math.round(this.state.elapsed / 1000);
        // Это даст нам число с одной цифрой после запятой dot (xx.x):
        var seconds = elapsed.toFixed(0);
        var procent = ((seconds*100)/(this.props.timer*60)).toFixed(2);
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
                    <button name="start" className="btn btn-success" onClick={this.timer_start}>Запустить таймер</button>
                        Прошло <b>{elapsed} секунд </b> из {this.props.timer*60}
                    {/*<div className='box_t_out'> %: {procent}*/}
                        {/*<div className='box_t_in' style={divStyle}></div>*/}
                    {/*</div>*/}
                    {/*<div>   <Progress completed={procent} /></div>*/}


                    <div className="progress">
                        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={divStyle}>

                        </div>
                    </div>

               </div>
            </div>
        );
    }
});

export default Test;
