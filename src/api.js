// api.js
import axios from 'axios';

// Function to fetch all posts
export const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });
};

// Function to fetch user-specific posts
export const getUserPosts = (userId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });
};
