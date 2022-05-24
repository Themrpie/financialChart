import {GET_FINANCIAL_ITEM, GET_MFI} from "./types";

export const getMfi = (symbol) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let financialChartMfi = [];
    
// URL TO Check response: https://www.alphavantage.co/query?function=RSI&symbol=SPY&interval=daily&time_period=10&series_type=open&apikey=8AMDLY6XGIMPPBBV
    try{
         await fetch(`https://www.alphavantage.co/query?function=MFI&symbol=${finItemSymbol}&interval=daily&time_period=20&series_type=open&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (let key in data['Technical Analysis: MFI']) {
                        financialChartXValuesFunction.push(key);
                        financialChartMfi.push(data['Technical Analysis: MFI'][key]['MFI']);                        
                    }
                })

        const mfi = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            financialChartCloseValues: financialChartMfi,            
        };

        dispatch({
            type: GET_MFI,
            payload: mfi
        })
    }catch (e) {
        console.log(e)
    }
}