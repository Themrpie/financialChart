import {GET_INCOME} from "./types";

export const getIncomeStatement = (symbol, timeFrame) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let fiscalDateEnding = [];
    let reportedCurrency = [];
    let grossProfit = [];
    let totalRevenue = [];
    let costOfRevenue = [];
    let costofGoodsAndServicesSold = [];
    let operatingIncome = [];
    let sellingGeneralAndAdministrative = [];
    let researchAndDevelopment = [];
    let operatingExpenses = [];
    let investmentIncomeNet = [];
    let netInterestIncome = [];
    let interestIncome = [];
    let interestExpense = [];
    let nonInterestIncome = [];
    let otherNonOperatingIncome = [];
    let depreciation = [];
    let depreciationAndAmortization = [];
    let incomeBeforeTax = [];
    let incomeTaxExpense = [];
    let interestAndDebtExpense = [];
    let netIncomeFromContinuingOperations = [];
    let comprehensiveIncomeNetOfTax = [];
    let ebit = [];
    let ebitda = [];
    let netIncome = [];
// TODO: Choose type of data, annualReports or quarterlyReports
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
                    console.log("From getIncomeStatement" + data);

                    for (let key in data[timeFrame]) {
                        financialChartXValuesFunction.push(key);
                        fiscalDateEnding.push(data[timeFrame][key]['fiscalDateEnding']);
                        reportedCurrency.push(data[timeFrame][key]['reportedCurrency']);
                        grossProfit.push(data[timeFrame][key]['grossProfit']);
                        totalRevenue.push(data[timeFrame][key]['totalRevenue']);
                        costOfRevenue.push(data[timeFrame][key]['costOfRevenue']);
                        costofGoodsAndServicesSold.push(data[timeFrame][key]['costofGoodsAndServicesSold']);
                        operatingIncome.push(data[timeFrame][key]['operatingIncome']);
                        sellingGeneralAndAdministrative.push(data[timeFrame][key]['sellingGeneralAndAdministrative']);
                        researchAndDevelopment.push(data[timeFrame][key]['researchAndDevelopment']);
                        operatingExpenses.push(data[timeFrame][key]['operatingExpenses']);
                        investmentIncomeNet.push(data[timeFrame][key]['investmentIncomeNet']);
                        netInterestIncome.push(data[timeFrame][key]['netInterestIncome']);
                        interestIncome.push(data[timeFrame][key]['interestIncome']);
                        interestExpense.push(data[timeFrame][key]['interestExpense']);
                        nonInterestIncome.push(data[timeFrame][key]['nonInterestIncome']);
                        otherNonOperatingIncome.push(data[timeFrame][key]['otherNonOperatingIncome']);
                        depreciation.push(data[timeFrame][key]['depreciation']);
                        depreciationAndAmortization.push(data[timeFrame][key]['depreciationAndAmortization']);
                        incomeBeforeTax.push(data[timeFrame][key]['incomeBeforeTax']);
                        incomeTaxExpense.push(data[timeFrame][key]['incomeTaxExpense']);
                        interestAndDebtExpense.push(data[timeFrame][key]['interestAndDebtExpense']);
                        netIncomeFromContinuingOperations.push(data[timeFrame][key]['netIncomeFromContinuingOperations']);
                        comprehensiveIncomeNetOfTax.push(data[timeFrame][key]['comprehensiveIncomeNetOfTax']);
                        ebit.push(data[timeFrame][key]['ebit']);
                        ebitda.push(data[timeFrame][key]['ebitda']);
                        netIncome.push(data[timeFrame][key]['netIncome']);
                    }
                    // This is correctly creating and filling the array with data console.log(data[timeFrame][1]);
                    console.log("Ends on: " + fiscalDateEnding[1]);

                })

        const incomeStatement = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            fiscalDateEndingValues: fiscalDateEnding,
            reportedCurrencyValues: reportedCurrency,
            grossProfitValues: grossProfit,
            totalRevenueValues: totalRevenue,
            costOfRevenueValues: costOfRevenue,
            costofGoodsAndServicesSoldValues: costofGoodsAndServicesSold,
            operatingIncomeValues: operatingIncome,
            sellingGeneralAndAdministrativeValues: sellingGeneralAndAdministrative,
            researchAndDevelopmentValues: researchAndDevelopment,
            operatingExpensesValues: operatingExpenses,
            investmentIncomeNetValues: investmentIncomeNet,
            netInterestIncomeValues: netInterestIncome,
            interestIncomeValues: interestIncome,
            interestExpenseValues: interestExpense,
            nonInterestIncomeValues: nonInterestIncome,
            otherNonOperatingIncomeValues: otherNonOperatingIncome,
            depreciationValues: depreciation,
            depreciationAndAmortizationValues: depreciationAndAmortization,
            incomeBeforeTaxValues: incomeBeforeTax,
            incomeTaxExpenseValues: incomeTaxExpense,
            interestAndDebtExpenseValues: interestAndDebtExpense,
            netIncomeFromContinuingOperationsValues: netIncomeFromContinuingOperations,
            comprehensiveIncomeNetOfTaxValues: comprehensiveIncomeNetOfTax,
            ebitValues: ebit,
            ebitdaValues: ebitda,
            netIncomeValues: netIncome
        };

        dispatch({
            type: GET_INCOME,
            payload: incomeStatement
        })
    }catch (e) {
        console.log(e)
    }
}