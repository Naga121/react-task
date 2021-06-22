import { takeEvery} from 'redux-saga/effects';
//import axios from 'axios';
import { addPeople, handlePeople } from './SagaActions';

export  function* rootSaga(){
    yield takeEvery("PEOPLE_READ_ACTION",handlePeople);
    yield takeEvery("ADD_PERSON",addPeople);
}