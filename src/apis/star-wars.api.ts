import { configs } from './../configs/index';
import axios from 'axios';

const baseURL = configs.apis.starWars;

export const getFilms = async () => {
  return axios.request({ baseURL, url: 'films' });
};

export const getFilmById = async (id: number) => {
  return axios.request({ baseURL, url: `films/${id}` });
};
