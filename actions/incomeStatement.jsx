import {GET_INCOME} from "./types";

export const getIncomeStatement = (symbol) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let fiscalDateEnding = [];
    let reportedCurrency = [];
    let grossProfit = [];
    let totalRevenue = [];
    let costOfRevenue = [];
    let costofGoodsAndServicesSold = [];

// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&outputsize=full&apikey=8AMDLY6XGIMPPBBV
    try{
         await fetch(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${finItemSymbol}&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (let key in data['annualReports']) {
                        financialChartXValuesFunction.push(key);
                        fiscalDateEnding.push(data['annualReports'][key]['fiscalDateEnding']);
                        reportedCurrency.push(data['annualReports'][key]['reportedCurrency']);
                        grossProfit.push(data['annualReports'][key]['grossProfit']);
                        totalRevenue.push(data['annualReports'][key]['totalRevenue']);
                        costOfRevenue.push(data['annualReports'][key]['costOfRevenue']);
                        costofGoodsAndServicesSold.push(data['annualReports'][key]['costofGoodsAndServicesSold']);
                        console.log(fiscalDateEnding[key]);
                    }
                    // This is correctly creating and filling the array with data console.log(data['annualReports'][1]);
                    console.log("Termina el " + fiscalDateEnding[1]);

                })

        const incomeStatement = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            financialChartCloseValues: fiscalDateEnding,
            financialChartOpenValues: reportedCurrency,
            financialChartHighValues: grossProfit,
            financialChartLowValues: totalRevenue,
        };

        dispatch({
            type: GET_INCOME,
            payload: incomeStatement
        })
    }catch (e) {
        console.log(e)
    }
}