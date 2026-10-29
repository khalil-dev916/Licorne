import apiSlice from './apiSlice';
import { PRODUCTS_URL } from '../constants';

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL,
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => `${PRODUCTS_URL}/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice;