import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/maykelsantoz/apirocketshoes',
});
