import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Search</h1>
        </header>
        <Routes>
          {/* Add routes here */}
          <Search />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
