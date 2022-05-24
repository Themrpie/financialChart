import {GET_FINANCIAL_ITEM, GET_RSI} from "./types";

export const getRsi = (symbol) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let financialChartRsi = [];
    
// URL TO Check response: https://www.alphavantage.co/query?function=RSI&symbol=SPY&interval=daily&time_period=10&series_type=open&apikey=8AMDLY6XGIMPPBBV
    try{
         await fetch(`https://www.alphavantage.co/query?function=RSI&symbol=${finItemSymbol}&interval=daily&time_period=10&series_type=open&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (let key in data['Technical Analysis: RSI']) {
                        financialChartXValuesFunction.push(key);
                        financialChartRsi.push(data['Technical Analysis: RSI'][key]['RSI']);                        
                    }
                })

        const rsi = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            financialChartCloseValues: financialChartRsi,            
        };

        dispatch({
            type: GET_RSI,
            payload: rsi
        })
    }catch (e) {
        console.log(e)
    }
}