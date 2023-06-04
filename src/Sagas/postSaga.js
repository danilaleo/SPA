// sagas/postSaga.js
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
} from '../Actions/postActions';
import { getPosts, getUserPosts } from '../api';

// Worker saga for fetching all posts
function* fetchPostsSaga() {
  try {
    const posts = yield call(getPosts);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

// Worker saga for fetching user-specific posts
function* fetchUserPostsSaga(action) {
  try {
    const posts = yield call(getUserPosts, action.payload);
    yield put(fetchUserPostsSuccess(posts));
  } catch (error) {
    yield put(fetchUserPostsFailure(error.message));
  }
}

// Watcher saga to listen for FETCH_POSTS_REQUEST and FETCH_USER_POSTS_REQUEST actions
export function* postSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
  yield takeLatest(FETCH_USER_POSTS_REQUEST, fetchUserPostsSaga);
}
