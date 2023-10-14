// BannerActions.js
import axios from 'axios';
import {
  BANNER_LIST_REQUEST,
  BANNER_LIST_SUCCESS,
  BANNER_LIST_FAIL,
} from '../constants/BannerConstants';

// Action to fetch the list of banners
export const listBanners = () => async (dispatch) => {
  try {
    dispatch({ type: BANNER_LIST_REQUEST });

    const { data } = await axios.get('/api/banners'); // Adjust the API endpoint

    dispatch({
      type: BANNER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BANNER_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
