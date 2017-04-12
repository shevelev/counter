/**
 * Created by vnedrenie3 on 11.04.2017.
 */

import zonesToRedux from '../zones.json';

const zoneList = function ( state = zonesToRedux,action ) {
//function zList ( state = zonesToRedux,action ) {
    if (action.type === 'ADD_COUNTER') {
        return [
            ...state,
            action.name
        ];
    }
    return state;
}

export default zoneList