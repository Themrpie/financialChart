import {GET_FINANCIAL_ITEM, GET_SMA} from "./types";

export const getSma = (symbol) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let financialChartSma = [];
    
// URL TO Check response: https://www.alphavantage.co/query?function=SMA&symbol=SPY&interval=daily&time_period=10&series_type=open&outputsize=full&apikey=8AMDLY6XGIMPPBBV
    try{
         await fetch(`https://www.alphavantage.co/query?function=SMA&symbol=${finItemSymbol}&interval=daily&time_period=100&series_type=open&outputsize=full&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (let key in data['Technical Analysis: SMA']) {
                        financialChartXValuesFunction.push(key);
                        financialChartSma.push(data['Technical Analysis: SMA'][key]['SMA']);                        
                    }
                })

        const sma = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            financialChartCloseValues: financialChartSma,            
        };

        dispatch({
            type: GET_SMA,
            payload: sma
        })
    }catch (e) {
        console.log(e)
    }
}