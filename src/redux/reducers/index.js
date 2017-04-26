import { combineReducers } from 'redux';
import { authStateReducer } from 'redux-oauth';

import zoneList from './zoneList';
import countList from './countList';

export default combineReducers({
    auth: authStateReducer,
    zList:  zoneList,
    cList:  countList
});
