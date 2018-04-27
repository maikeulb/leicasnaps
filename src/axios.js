import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://leicasnaps.firebaseio.com/'
});

export default instance;
