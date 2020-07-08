import axios from '../../config/axios';
import config from '../../config/config';

export const GET_GLOBAL_CASES = "GET_GLOBAL_CASES";
export const GET_CURRENT_CASES = "GET_CURRENT_CASES";
export const GET_INITIAL_DATA = "GET_INITIAL_DATA";

export const getInitalData = () => {
    return async dispatch => {
        let res;
        try {
            res = await axios.get("summary");
        } catch (e) {
            throw new Error(e.message);
        }
        dispatch({
            type: GET_INITIAL_DATA,
            payload: res.data
        });
    }
}

export const getGlobalCases = () => {
    return async dispatch => {
        try {
            dispatch({
                type: GET_GLOBAL_CASES
            });
        } catch (e) {
            throw new Error(e.message);
        }
    }
}

export const getCurrentCountryCases = (latitue, longitute) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitue}+${longitute}&key=${config.apiKey}`);
            const { components } = (await response.json())["results"][0];
            dispatch({
                type: GET_CURRENT_CASES,
                payload: components
            });
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
