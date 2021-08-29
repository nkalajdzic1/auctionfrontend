import axios from "axios";

const TMBD_API_URL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_TMDB_API_KEY}`;

export const getMinMaxPrice = () => {
  return axios.get(`${TMBD_API_URL}/price/max_min_price`);
};
