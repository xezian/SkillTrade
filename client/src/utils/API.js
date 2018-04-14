import axios from 'axios';

export default {
  // Based on the search input, results of skills or needs will be displayed
  getResults: (option, category) => {
    if (option === '1') {
      return axios.get(`/api/needs/${category}`);
    }
    if (option === '2') {
      return axios.get(`/api/skills/${category}`);
    }
    return 'it is what it is';
  },

  // Username will be matched to the password to verify the user and
  // access to the users profile page will be given
  getVerification: (username, password) => axios.post('/api/users/login', { username, password }),

  // New user will be created
  createUser: newUser => axios.put('/api/users', newUser),
};

