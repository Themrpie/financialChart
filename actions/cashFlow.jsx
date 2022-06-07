import {GET_CASHFLOW} from "./types";

export const getCashFlow = (symbol, timeFrame) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let fiscalDateEnding = [];
    let reportedCurrency = [];
    let operatingCashflow = [];
    let paymentsForOperatingActivities = [];
    let proceedsFromOperatingActivities = [];
    let changeInOperatingLiabilities = [];
    let changeInOperatingAssets = [];
    let paymentsForRepurchaseOfEquityDepletionAndAmortization = [];
    let capitalExpenditures = [];
    let changeInReceivables = [];
    let changeInInventory = [];
    let profitLoss = [];
    let cashflowFromInvestment = [];
    let cashflowFromFinancing = [];
    let proceedsFromRepaymentsOfShortTermDebt = [];
    let paymentsForRepurchaseOfCommonStock = [];
    let paymentsForRepurchaseOfEquity = [];
    let paymentsForRepurchaseOfPreferredStock = [];
    let dividendPayout = [];
    let dividendPayoutCommonStock = [];
    let dividendPayoutPreferredStock = [];
    let proceedsFromIssuanceOfCommonStock = [];
    let proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet = [];
    let proceedsFromIssuanceOfPreferredStock = [];
    let proceedsFromRepurchaseOfEquity = [];
    let proceedsFromSaleOfTreasuryStock = [];
    let changeInCashAndCashEquivalents = [];
    let changeInExchangeRate = [];
    let netIncome = [];
// TODO: Choose type of data, annualReports or quarterlyReports
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&outputsize=full&apikey=8AMDLY6XGIMPPBBV
    try{
         await fetch(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${finItemSymbol}&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log("From getCashflow" + data);

                    for (let key in data[timeFrame]) {
                        financialChartXValuesFunction.push(key);
                        fiscalDateEnding.push(data[timeFrame][key]['fiscalDateEnding']);
                        reportedCurrency.push(data[timeFrame][key]['reportedCurrency']);
                        operatingCashflow.push(data[timeFrame][key]['operatingCashflow']);
                        paymentsForOperatingActivities.push(data[timeFrame][key]['paymentsForOperatingActivities']);
                        proceedsFromOperatingActivities.push(data[timeFrame][key]['proceedsFromOperatingActivities']);
                        changeInOperatingLiabilities.push(data[timeFrame][key]['changeInOperatingLiabilities']);
                        changeInOperatingAssets.push(data[timeFrame][key]['changeInOperatingAssets']);
                        paymentsForRepurchaseOfEquityDepletionAndAmortization.push(data[timeFrame][key]['paymentsForRepurchaseOfEquityDepletionAndAmortization']);
                        capitalExpenditures.push(data[timeFrame][key]['capitalExpenditures']);
                        changeInReceivables.push(data[timeFrame][key]['changeInReceivables']);
                        changeInInventory.push(data[timeFrame][key]['changeInInventory']);
                        profitLoss.push(data[timeFrame][key]['profitLoss']);
                        cashflowFromInvestment.push(data[timeFrame][key]['cashflowFromInvestment']);
                        cashflowFromFinancing.push(data[timeFrame][key]['cashflowFromFinancing']);
                        proceedsFromRepaymentsOfShortTermDebt.push(data[timeFrame][key]['proceedsFromRepaymentsOfShortTermDebt']);
                        paymentsForRepurchaseOfCommonStock.push(data[timeFrame][key]['paymentsForRepurchaseOfCommonStock']);
                        paymentsForRepurchaseOfEquity.push(data[timeFrame][key]['paymentsForRepurchaseOfEquity']);
                        paymentsForRepurchaseOfPreferredStock.push(data[timeFrame][key]['paymentsForRepurchaseOfPreferredStock']);
                        dividendPayout.push(data[timeFrame][key]['dividendPayout']);
                        dividendPayoutCommonStock.push(data[timeFrame][key]['dividendPayoutCommonStock']);
                        dividendPayoutPreferredStock.push(data[timeFrame][key]['dividendPayoutPreferredStock']);
                        proceedsFromIssuanceOfCommonStock.push(data[timeFrame][key]['proceedsFromIssuanceOfCommonStock']);
                        proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet.push(data[timeFrame][key]['proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet']);
                        proceedsFromIssuanceOfPreferredStock.push(data[timeFrame][key]['proceedsFromIssuanceOfPreferredStock']);
                        proceedsFromIssuanceOfPreferredStock.push(data[timeFrame][key]['proceedsFromIssuanceOfPreferredStock']);
                        proceedsFromSaleOfTreasuryStock.push(data[timeFrame][key]['proceedsFromSaleOfTreasuryStock']);
                        changeInCashAndCashEquivalents.push(data[timeFrame][key]['changeInCashAndCashEquivalents']);
                        changeInExchangeRate.push(data[timeFrame][key]['changeInExchangeRate']);
                        netIncome.push(data[timeFrame][key]['netIncome']);                        

                    }
                    // This is correctly creating and filling the array with data console.log(data[timeFrame][1]);
                    console.log("Ends on: " + fiscalDateEnding[1]);

                })

        const cashFlow = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            fiscalDateEndingValues: fiscalDateEnding,
            reportedCurrencyValues: reportedCurrency,
            operatingCashflowValues: operatingCashflow,
            paymentsForOperatingActivitiesValues: paymentsForOperatingActivities,
            proceedsFromOperatingActivitiesValues: proceedsFromOperatingActivities,
            changeInOperatingLiabilitiesValues: changeInOperatingLiabilities,
            changeInOperatingAssetsValues: changeInOperatingAssets,
            paymentsForRepurchaseOfEquityDepletionAndAmortizationValues: paymentsForRepurchaseOfEquityDepletionAndAmortization,
            capitalExpendituresValues: capitalExpenditures,
            changeInReceivablesValues: changeInReceivables,
            changeInInventoryValues: changeInInventory,
            profitLossValues: profitLoss,
            cashflowFromInvestmentValues: cashflowFromInvestment,
            cashflowFromFinancingValues: cashflowFromFinancing,
            proceedsFromRepaymentsOfShortTermDebtValues: proceedsFromRepaymentsOfShortTermDebt,
            paymentsForRepurchaseOfCommonStockValues: paymentsForRepurchaseOfCommonStock,
            paymentsForRepurchaseOfEquityValues: paymentsForRepurchaseOfEquity,
            paymentsForRepurchaseOfPreferredStockValues: paymentsForRepurchaseOfPreferredStock,
            dividendPayoutValues: dividendPayout,
            dividendPayoutCommonStockValues: dividendPayoutCommonStock,
            dividendPayoutPreferredStockValues: dividendPayoutPreferredStock,
            proceedsFromIssuanceOfCommonStockValues: proceedsFromIssuanceOfCommonStock,
            proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNetValues: proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet,
            proceedsFromIssuanceOfPreferredStockValues: proceedsFromIssuanceOfPreferredStock,
            proceedsFromIssuanceOfPreferredStockValues: proceedsFromIssuanceOfPreferredStock,
            proceedsFromSaleOfTreasuryStockValues: proceedsFromSaleOfTreasuryStock,
            changeInCashAndCashEquivalentsValues: changeInCashAndCashEquivalents,
            changeInExchangeRateValues: changeInExchangeRate,
            netIncomeValues: netIncome,
        };

        dispatch({
            type: GET_CASHFLOW,
            payload: cashFlow
        })
    }catch (e) {
        console.log(e)
    }
}