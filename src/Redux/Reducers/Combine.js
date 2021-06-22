import { combineReducers } from 'redux';
import { PeopleReducer} from './Reducer'

export const appstate= combineReducers({
     peoplevalues:PeopleReducer
}) 