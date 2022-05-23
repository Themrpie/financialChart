import {GET_FINANCIAL_ITEM, GET_SMA} from "../actions/types";

const initialState = {
    financialItem: null,
    sma: null
};

export default function (state=initialState,action) {
    const {type,payload}= action;

    if (type === GET_FINANCIAL_ITEM) {
        return{
            ...state,
            financialItem: payload
        };
    }
    if (type === GET_SMA) {
        return{
            ...state,
            sma: payload
        };
    } 
    else {
        return state
    }
}