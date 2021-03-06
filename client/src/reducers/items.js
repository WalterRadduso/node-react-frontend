import { ITEMS } from "../types";

const defaultState = [];

export default (state = defaultState, action) => {
    if (action.type === ITEMS) {
        return { ...state, itemObtained: action.payload };
    } else {
        return state;
    }
};
