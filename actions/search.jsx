import {GET_FINANCIAL_ITEM, GET_SEARCH} from "./types";

export const getSearch = (keywords) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';

    let financialChartXValuesFunction = [];
    let results = [];
    
// URL TO Check response: https://www.alphavantage.co/query?function=RSI&symbol=SPY&interval=daily&time_period=10&series_type=open&apikey=8AMDLY6XGIMPPBBV
    try{
         await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();

                }
            )
            .then(
                function(data) {                    
                    for (let key in data) {
                        financialChartXValuesFunction.push(key);
                        results.push(data[key][1]['1. symbol']);
                    }

                })
            console.log('Desde getSearch' + results)
        const search = {
            financialChartXValues: financialChartXValuesFunction,
            resultsValues: results,
        };

        dispatch({
            type: GET_SEARCH,
            payload: search
        })
    }catch (e) {
        console.log(e)
    }
}