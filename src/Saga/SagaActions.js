import axios from 'axios';
import {call,put} from 'redux-saga/effects'

function getCaller(url){
    return axios.get(url);
}

function doPost(url,data){
    return axios.post(url,data);
}

export function* handlePeople(){
      let   response = yield call(getCaller,"http://localhost:8080/Datastore")
      yield put({type:'PEOPLE_ACTION',records:response.data});

}

export function* addPeople(action){
    let person=action.data;
    let response = yield call(doPost,"http://localhost:8080/Datastore",person);
    yield handlePeople();

} 