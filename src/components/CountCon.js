import React, { Component } from 'react';

export timer_start() {
    // componentDidMount вызывается react'ом, когда компонент
    // был отрисован на странице. Мы можем установить интервал здесь:
    this.start2 = Date.now() + this.props.timer*60;
    this.timer = setInterval(this.tick, 1000);

    console.log('this-start', this);
    this.tick();
    // console.log('присоединили st', this.start2);
}

export default CountCon;