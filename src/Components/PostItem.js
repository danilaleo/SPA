// PostItem.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <Link to={`/user/${post.userId}`}>
        <img src="avatar-url" alt="Avatar" />
      </Link>
      <button onClick={toggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && (
        <ul>
          {post.comments.map((comment) => (
            <li key={comment.id}>
              <h5>{comment.email}</h5>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostItem;
