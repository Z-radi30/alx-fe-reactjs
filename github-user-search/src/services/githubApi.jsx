import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const getUser = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Add more API methods as needed
