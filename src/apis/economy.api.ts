import axios from 'axios';
import { configs } from './../configs/index';

export const getPrice = async () => {
  return axios.request({ url: configs.apis.economia });
};
