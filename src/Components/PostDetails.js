// PostDetails.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserPosts } from '../../actions/postActions';
import PostItem from './PostItem';

function PostDetails() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const userPosts = useSelector((state) => state.userPosts);

  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <h2>User Details</h2>
      {/* Display brief information about the user */}
      <h3>User's Posts</h3>
      {userPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostDetails;
