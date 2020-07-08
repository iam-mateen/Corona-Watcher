import { GET_GLOBAL_CASES, GET_INITIAL_DATA, GET_CURRENT_CASES } from '../actions/HomeAction';
const initalState = {
    dataSet: null,
    completeData: null,
}

const homeReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_INITIAL_DATA:
            const globalData = action.payload;
            console.log(globalData["Global"]);
            return {
                ...state,
                completeData: globalData
            }
        case GET_GLOBAL_CASES:
            const { Global } = state.completeData;
            return {
                ...state,
                dataSet: Global
            }
        case GET_CURRENT_CASES:
            const { country_code } = action.payload;
            const { Countries } = state.completeData;
            console.log(country_code)
            const dataSet = Countries.find(country => country.CountryCode.toUpperCase() == country_code.toUpperCase());
            
            return {
                ...state,
                dataSet: dataSet
            }
    }
    return state;
}
export default homeReducer;

