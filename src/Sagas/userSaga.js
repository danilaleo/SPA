import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/userActions';
import { getUser } from '../api';

// Worker saga for fetching user data
function* fetchUserSaga(action) {
  try {
    const user = yield call(getUser, action.payload);
    yield put({ type: FETCH_USER_SUCCESS, payload: user });
  } catch (error) {
    yield put({ type: FETCH_USER_FAILURE, payload: error.message });
  }
}

// Watcher saga to listen for FETCH_USER_REQUEST action
export function* userSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}
