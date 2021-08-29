import axios from "axios";

const TMBD_API_URL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_TMDB_API_KEY}`;

export const getAllColors = () => {
  return axios.get(`${TMBD_API_URL}/color/all`);
};
