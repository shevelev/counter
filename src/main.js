import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.jsx';

import ZoneList from './components/ZoneList.jsx';
//import Zone from './components/Zone.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>

            <Route path='/timers' component={ZoneList} />



        </Route>
    </Router>,
    document.getElementById('app')
);