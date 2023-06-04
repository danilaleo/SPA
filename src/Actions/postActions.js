// actions/postActions.js
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_USER_POSTS_REQUEST = 'FETCH_USER_POSTS_REQUEST';
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS';
export const FETCH_USER_POSTS_FAILURE = 'FETCH_USER_POSTS_FAILURE';

export const fetchPosts = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchUserPosts = (userId) => ({
  type: FETCH_USER_POSTS_REQUEST,
  payload: userId,
});

export const fetchUserPostsSuccess = (posts) => ({
  type: FETCH_USER_POSTS_SUCCESS,
  payload: posts,
});

export const fetchUserPostsFailure = (error) => ({
  type: FETCH_USER_POSTS_FAILURE,
  payload: error,
});
