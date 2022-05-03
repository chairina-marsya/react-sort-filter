import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setUser, GET_USER } from '../reducers/index';

export function requestGetUser() {
  return axios.request({
    method: 'get',
    url: 'https://randomuser.me/api/?results=25',
  });
}

export function* handleGetUser() {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data.results));
  } catch (error) {
    yield put(setUser([]));
  }
}

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
