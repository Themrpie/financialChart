import {GET_FINANCIAL_ITEM, GET_BOP} from "./types";

export const getBop = (symbol) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let financialChartBop = [];
    
// URL TO Check response: https://www.alphavantage.co/query?function=BOP&symbol=SPY&interval=daily&time_period=10&series_type=open&outputsize=full&apikey=8AMDLY6XGIMPPBBV
    try{
         await fetch(`https://www.alphavantage.co/query?function=BOP&symbol=${finItemSymbol}&interval=daily&time_period=100&series_type=open&outputsize=full&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (let key in data['Technical Analysis: BOP']) {
                        financialChartXValuesFunction.push(key);
                        financialChartBop.push(data['Technical Analysis: BOP'][key]['BOP']);                        
                    }
                })

        const bop = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            financialChartCloseValues: financialChartBop,            
        };

        dispatch({
            type: GET_BOP,
            payload: bop
        })
    }catch (e) {
        console.log(e)
    }
}