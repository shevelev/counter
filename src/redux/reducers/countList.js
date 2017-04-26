/**
 * Created by vnedrenie3 on 11.04.2017.
 */

const countList = function ( state = [] ,action ) {
    if (action.type === 'ADD_COUNTER') {

        const idx = state.findIndex(list => list.id === action.zone.id);
        // console.log('то что пришло в: ',idx);
        if (idx < 0) {
            return [
                ...state,
                action.zone
            ];
        } else
        {
            return state;
        }
    }
    else if (action.type === 'DEL_COUNTER') {

        let _state = state.filter(function(obj) {
            return obj.id !== action.id;
        });
        // console.log('_state: ',_state);
        // console.log('state: ',state);
        // console.log('action: ',action);
        return _state;

    }
    return state;
}

export default countList
