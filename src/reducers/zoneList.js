/**
 * Created by vnedrenie3 on 11.04.2017.
 */

import zonesToRedux from '../zones.json';

const zoneList = function ( state = zonesToRedux,action ) {
//function zList ( state = zonesToRedux,action ) {
    if (action.type === 'FIND_ZONE') {
        if (action.zone.length > 0) {
            let _zone = zonesToRedux.filter((el) => {
                let searchValue = el.zone_descr.toLowerCase();
                return searchValue.indexOf(action.zone) !== -1;
            });
            return _zone;
        }
     }
    return zonesToRedux;
}

export default zoneList