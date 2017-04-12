import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import reducer from './reducers'
import App from './App.jsx';
import ZoneList from './components/ZoneList.jsx';

const store = createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

console.log('Наш store: ',store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <Route path='/timers' component={ZoneList} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);