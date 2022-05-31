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

                    for (let key in data['annualReports']) {
                        financialChartXValuesFunction.push(key);
                        fiscalDateEnding.push(data['annualReports'][key]['fiscalDateEnding']);
                        reportedCurrency.push(data['annualReports'][key]['reportedCurrency']);
                        grossProfit.push(data['annualReports'][key]['grossProfit']);
                        totalRevenue.push(data['annualReports'][key]['totalRevenue']);
                        costOfRevenue.push(data['annualReports'][key]['costOfRevenue']);
                        costofGoodsAndServicesSold.push(data['annualReports'][key]['costofGoodsAndServicesSold']);
                        operatingIncome.push(data['annualReports'][key]['operatingIncome']);
                        sellingGeneralAndAdministrative.push(data['annualReports'][key]['sellingGeneralAndAdministrative']);
                        researchAndDevelopment.push(data['annualReports'][key]['researchAndDevelopment']);
                        operatingExpenses.push(data['annualReports'][key]['operatingExpenses']);
                        investmentIncomeNet.push(data['annualReports'][key]['investmentIncomeNet']);
                        netInterestIncome.push(data['annualReports'][key]['netInterestIncome']);
                        interestIncome.push(data['annualReports'][key]['interestIncome']);
                        interestExpense.push(data['annualReports'][key]['interestExpense']);
                        nonInterestIncome.push(data['annualReports'][key]['nonInterestIncome']);
                        otherNonOperatingIncome.push(data['annualReports'][key]['otherNonOperatingIncome']);
                        depreciation.push(data['annualReports'][key]['depreciation']);
                        depreciationAndAmortization.push(data['annualReports'][key]['depreciationAndAmortization']);
                        incomeBeforeTax.push(data['annualReports'][key]['incomeBeforeTax']);
                        incomeTaxExpense.push(data['annualReports'][key]['incomeTaxExpense']);
                        interestAndDebtExpense.push(data['annualReports'][key]['interestAndDebtExpense']);
                        netIncomeFromContinuingOperations.push(data['annualReports'][key]['netIncomeFromContinuingOperations']);
                        comprehensiveIncomeNetOfTax.push(data['annualReports'][key]['comprehensiveIncomeNetOfTax']);
                        ebit.push(data['annualReports'][key]['ebit']);
                        ebitda.push(data['annualReports'][key]['ebitda']);
                        netIncome.push(data['annualReports'][key]['netIncome']);
                    }
                    // This is correctly creating and filling the array with data console.log(data['annualReports'][1]);
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