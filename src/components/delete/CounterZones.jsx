import React from 'react';
import classNames from 'classnames';


const CounterZones = React.createClass({

    getInitialState: function(){

        // Это выполняется перед функцией render. Возвращаемый объект
        // присваивается в this.state, чтобы мы могли использовать его позже.

        return { elapsed: 0 };
    },

    timer_start: function(){

        // componentDidMount вызывается react'ом, когда компонент
        // был отрисован на странице. Мы можем установить интервал здесь:

        this.timer = setInterval(this.tick, 50);
    },

    timer_stop: function(){

        // Этот метод вызывается сразу после того, как компонент удален
        // со страницы и уничтожен. Мы можем удалить интервал здесь:

        clearInterval(this.timer);
    },

    tick: function(){

        // Эта функция вызывается каждые 50мс. Она обновляет
        // счетчик затраченного времени. Вызов setState заставляет компонент перерисовываться

        this.setState({elapsed: new Date() - this.props.start});
    },


    render() {
        var elapsed = Math.round(this.state.elapsed / 1000);

        // Это даст нам число с одной цифрой после запятой dot (xx.x):
        var seconds = (elapsed / 1).toFixed(0);

        // Хоть мы и возвращаем целый <p> элемент, react разумно обновит
        // только измененные части, содержащие переменную seconds.

        // const { key, title } = this.props;

        return (
            <div>
                <div className='title'>
                    ( {this.props.children} ) {this.props.title}<br />
                    репоп {this.props.timer} минут
                    <button name="start" onClick={this.timer_start}>start</button>
                    <button name="stop"  onClick={this.timer_stop}>stop</button>

                    <p>Запустили как <b>{seconds} секунд</b></p>
                    <hr />

                </div>

            </div>
        );
    }
});

export default CounterZones;
