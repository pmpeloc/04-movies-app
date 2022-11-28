import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '9e62c874fc808fe2c9125fd1af987c10',
    language: 'es-ES',
  },
});

export default movieDB;
