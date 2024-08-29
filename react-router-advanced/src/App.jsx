import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'; // Assuming you have a Home component
import About from './components/About'; // Assuming you have an About component
import Profile from './components/Profile'; // Assuming you have a Profile component
import BlogPost from './components/BlogPost'; // The BlogPost component to handle dynamic routes

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog/1">Blog Post 1</Link></li>
          <li><Link to="/blog/2">Blog Post 2</Link></li>
          <li><Link to="/blog/3">Blog Post 3</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<Profile />} /> {/* Profile component with nested routes */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route for blog posts */}
      </Routes>
    </Router>
  );
}

export default App;
