import {GET_FINANCIAL_ITEM, GET_EARNINGS} from "./types";

export const getEarnings = (symbol, timeFrame) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let fiscalDateEnding = [];
    let reportedEPS = [];
    let surprisePercentage = [];

    
// URL TO Check response: https://www.alphavantage.co/query?function=BOP&symbol=SPY&interval=daily&time_period=10&series_type=open&outputsize=full&apikey=8AMDLY6XGIMPPBBV
    try{
         await fetch(`https://www.alphavantage.co/query?function=EARNINGS&symbol=${finItemSymbol}&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (let key in data[timeFrame]) {
                        financialChartXValuesFunction.push(key);
                        fiscalDateEnding.push(data[timeFrame][key]['fiscalDateEnding']);
                        reportedEPS.push(data[timeFrame][key]['reportedEPS']);
                        surprisePercentage.push(data[timeFrame][key]['surprisePercentage']);

                    }
                    console.log('uLTIMO ' + reportedEPS[1]);
                })

        const earnings = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            fiscalDateEndingValues: fiscalDateEnding,
            surprisePercentageValues: surprisePercentage,
            reportedEPSValue: reportedEPS,            
        };

        dispatch({
            type: GET_EARNINGS,
            payload: earnings
        })
    }catch (e) {
        console.log(e)
    }
}