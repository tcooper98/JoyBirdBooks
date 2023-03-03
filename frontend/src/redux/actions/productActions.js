import axios from 'axios';

import { setProducts, setLoading, setError } from '../slices/products';

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get('/api/products');
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'unexpected error.'
      )
    );
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    // setProducts is updating the store, but we don't really need that.
    // what we need is the data from a single product, loaded into the single product page.
    // we don't really need redux for that. so this method can probably be deleted.
    // move the axios call to the single product page, and just use the data from that.
    //dispatch(setProducts(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'unexpected error.'
      )
    );
  }
}

