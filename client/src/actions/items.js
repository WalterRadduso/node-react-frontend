import { ITEMS } from "../types";
import axios from 'axios';
import config from '../config';

// Get the Item by ID.
export const getItem = (itemID) => {
    return (dispatch) => {
        if (itemID) {
            axios
                .get(`${config.api.host}/items/${itemID}`)
                .then((result) => {
                    dispatch({ type: ITEMS, payload: result.data.data });
                })
                .catch((error) => {
                    dispatch({type: ITEMS, payload: { result: 'empty' } });
                });
        }

        dispatch({type: ITEMS, payload: [] });
    }
};
