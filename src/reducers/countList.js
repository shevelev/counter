/**
 * Created by vnedrenie3 on 11.04.2017.
 */

const countList = function ( state = [] ,action ) {
//function cList ( state = zonesToRedux ,action ) {
    if (action.type === 'ADD_COUNTER') {
        return [
            ...state,
            action.name
        ];
    }
    return state;
}

export default countList
