import {GET_FINANCIAL_ITEM, GET_SMA, GET_RSI, GET_ATR, GET_MFI, GET_BOP, GET_INCOME, GET_EARNINGS, GET_CASHFLOW, GET_BALANCESHEET, GET_OVERVIEW, GET_SEARCH} from "../actions/types";

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
    if (type === GET_EARNINGS) {
        return{
            ...state,
            earnings: payload
        };
    }
    if (type === GET_CASHFLOW) {
        return{
            ...state,
            cashFlow: payload
        };
    }  
    if (type === GET_BALANCESHEET) {
        return{
            ...state,
            balanceSheet: payload
        };
    }
    if (type === GET_OVERVIEW) {
        return{
            ...state,
            overview: payload
        };
    }
    if (type === GET_SEARCH) {
        return{
            ...state,
            search: payload
        };
    }
    else {
        return state
    }
}