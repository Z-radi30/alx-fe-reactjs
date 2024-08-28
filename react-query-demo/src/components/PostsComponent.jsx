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
  // Using useQuery with additional options
  const { data, isError, error, isLoading, refetch, isFetching } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // Data is considered fresh for 1 minute
    cacheTime: 300000, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts {isFetching ? ' (Updating...)' : ''}</h1>
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
