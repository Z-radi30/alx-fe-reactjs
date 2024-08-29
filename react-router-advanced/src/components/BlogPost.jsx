import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams(); // Extract the postId from the URL

  // Example: Simulated data for blog posts
  const blogPosts = {
    1: { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    2: { title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
    3: { title: 'Third Blog Post', content: 'This is the content of the third blog post.' }
  };

  const post = blogPosts[postId];

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
