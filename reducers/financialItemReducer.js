import {GET_FINANCIAL_ITEM, GET_SMA, GET_RSI, GET_ATR, GET_MFI, GET_BOP, GET_INCOME} from "../actions/types";

const initialState = {
    financialItem: null,
    sma: null,
    rsi: null,
    atr: null,
    mfi: null
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
    if (type === GET_RSI) {
        return{
            ...state,
            rsi: payload
        };
    } 
    if (type === GET_ATR) {
        return{
            ...state,
            atr: payload
        };
    }
    if (type === GET_MFI) {
        return{
            ...state,
            mfi: payload
        };
    }
    if (type === GET_BOP) {
        return{
            ...state,
            bop: payload
        };
    }
    if (type === GET_INCOME) {
        return{
            ...state,
            incomeStatement: payload
        };
    }  
    else {
        return state
    }
}