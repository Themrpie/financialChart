import {GET_OVERVIEW} from "./types";

export const getOverview = (symbol) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let information = [];
    
// TODO: Choose type of data, annualReports or quarterlyReports
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&outputsize=full&apikey=8AMDLY6XGIMPPBBV
    try{
        console.log("From companyOverview" );
         await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${finItemSymbol}&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log("From companyOverview" + data);

                    for (let key in data) {
                        financialChartXValuesFunction.push(key);
                        information.push(data[key]);
                        console.log("Loop "+ key);                                               
                    }
                    // This is correctly creating and filling the array with data console.log(data[timeFrame][1]);                    
                })

        const overview = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            informationValues: information,            
        };

        dispatch({
            type: GET_OVERVIEW,
            payload: overview
        })
    }catch (e) {
        console.log(e)
    }
}