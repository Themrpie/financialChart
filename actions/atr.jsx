import {GET_FINANCIAL_ITEM, GET_ATR} from "./types";

export const getAtr = (symbol) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let financialChartAtr = [];
    
// URL TO Check response: https://www.alphavantage.co/query?function=ATR&symbol=SPY&interval=daily&time_period=4&series_type=open&apikey=8AMDLY6XGIMPPBBV
    try{
         await fetch(`https://www.alphavantage.co/query?function=ATR&symbol=${finItemSymbol}&interval=daily&time_period=4&series_type=open&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (let key in data['Technical Analysis: ATR']) {
                        financialChartXValuesFunction.push(key);
                        financialChartAtr.push(data['Technical Analysis: ATR'][key]['ATR']);                        
                    }
                })

        const atr = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            financialChartCloseValues: financialChartAtr,            
        };

        dispatch({
            type: GET_ATR,
            payload: atr
        })
    }catch (e) {
        console.log(e)
    }
}