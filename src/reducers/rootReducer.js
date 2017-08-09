import { combineReducers } from 'redux'
import addPeople from './addPeople'

const rootReducer = combineReducers({
    addPeople,
})

export default rootReducer