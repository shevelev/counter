import { combineReducers } from 'redux'
import zoneList from './zoneList'
import countList from './countList'

const countApp = combineReducers({
    zoneList,
    countList
})

export default countApp