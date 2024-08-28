import React from 'react';
import { useQuery } from 'react-query';

// Fetch function for fetching posts
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Using useQuery to fetch and manage posts data
  const { data, isError, isLoading, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
