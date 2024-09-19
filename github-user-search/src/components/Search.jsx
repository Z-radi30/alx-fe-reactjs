import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
      setError("Looks like we cant find the user"); // Updated error message
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Looks like we can't find the user.</p>;
    }

    if (userData) {
      return (
        <div className="user-info">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} className="avatar" />
          <h2>{userData.name || userData.login}</h2>
          <p>GitHub Profile: <a href={userData.html_url} target="_blank" rel="noopener noreferrer">{userData.login}</a></p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>

      {renderContent()}
    </div>
  );
}

export default Search;
