import React from 'react';
import { Route, IndexRoute }  from 'react-router';
import App from 'components/App';
import HelloWorldPage from 'components/HelloWorldPage';
import { isUserSignedIn } from 'redux/models/user';

// my
import ZoneList from './components/ZoneList';

function requireAuth(nextState, transition, cb) {
    setTimeout(() => {
        if (!isUserSignedIn(store.getState())) {
            transition('/');
        }
        cb();
    }, 0);
}

let store;

export default function routes(storeRef) {
    store = storeRef;

    return (
        <Route component={App} path='/'>
          <IndexRoute component={HelloWorldPage} />
            {/*<Route path='counters' component={CounterPage} />*/}
          <Route path='/timers' component={ZoneList} />
            {/*<Route component={TimePage} path='time' onEnter={requireAuth} />*/}
        </Route>
    );
}
