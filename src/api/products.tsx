import axios from "axios";

export interface IShopItemsFilters {
  category: number;
  subcategory: number;
  minPrice: number;
  maxPrice: number;
  color: string | number;
  size: string | number;
}

const TMBD_API_URL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_TMDB_API_KEY}`;

export const getFeatureProducts = () => {
  return axios.get(`${TMBD_API_URL}/auction/feature_products`);
};

export const getRandomItem = () => {
  return axios.get(`${TMBD_API_URL}/auction/random_item`);
};

export const getNTL = (route: string) => {
  return axios.get(`${TMBD_API_URL}/auction/${route}`);
};

export const getShopItems = (filters: IShopItemsFilters) => {
  return axios.post(`${TMBD_API_URL}/shop/items`, filters);
};

export const getSingleItem = (auction_id: number) => {
  return axios.get(`${TMBD_API_URL}/auction/single_item/${auction_id}`);
};
