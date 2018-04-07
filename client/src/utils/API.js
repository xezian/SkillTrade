import axios from 'axios'

export default {
  getResults: (option, category) => {
    if (option === '1') {
      return axios.get(`/api/skills/${category}`);
    }
    if (option === '2') {
      return axios.get(`/api/needs/${category}`);
    }
  }
}
