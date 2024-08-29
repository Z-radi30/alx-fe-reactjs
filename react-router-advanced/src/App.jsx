import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'; // Assuming you have a Home component
import About from './components/About'; // Assuming you have an About component
import Profile from './components/Profile'; // Assuming you have a Profile component
import BlogPost from './components/BlogPost'; // The BlogPost component you just created

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/post/1">First Blog Post</Link></li>
          <li><Link to="/post/2">Second Blog Post</Link></li>
          <li><Link to="/post/3">Third Blog Post</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:postId" element={<BlogPost />} /> {/* Dynamic Route */}
      </Routes>
    </Router>
  );
}

export default App;
