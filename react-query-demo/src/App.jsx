import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from "./components/PostsComponent";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/Profile'; // The Profile component you just created
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';





function App() {
// Example components for routing
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>

    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<profile />} />
        {/* Nested Routes */}
        <Route path="details" element={<Profile />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </Router>




      
    </>
  )
}

export default App
