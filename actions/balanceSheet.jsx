import {GET_BALANCESHEET} from "./types";

export const getBalanceSheet = (symbol, timeFrame) => async dispatch => {
    const API_KEY = '8AMDLY6XGIMPPBBV';
    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let fiscalDateEnding = [];
    let reportedCurrency = [];
    let totalAssets = [];
    let totalCurrentAssets = [];
    let cashAndCashEquivalentsAtCarryingValue = [];
    let cashAndShortTermInvestments = [];
    let inventory = [];
    let currentNetReceivables = [];
    let totalNonCurrentAssets = [];
    let propertyPlantEquipment = [];
    let accumulatedDepreciationAmortizationPPE = [];
    let intangibleAssets = [];
    let intangibleAssetsExcludingGoodwill = [];
    let goodwill = [];
    let investments = [];
    let longTermInvestments = [];
    let shortTermInvestments = [];
    let otherCurrentAssets = [];
    let otherNonCurrrentAssets = [];
    let totalLiabilities = [];
    let totalCurrentLiabilities = [];
    let currentAccountsPayable = [];
    let deferredRevenue = [];
    let currentDebt = [];
    let shortTermDebt = [];
    let totalNonCurrentLiabilities = [];
    let capitalLeaseObligations = [];
    let longTermDebt = [];
    let currentLongTermDebt = [];
    let longTermDebtNoncurrent = [];
    let shortLongTermDebtTotal = [];
    let otherCurrentLiabilities = [];
    let otherNonCurrentLiabilities = [];
    let totalShareholderEquity = [];
    let treasuryStock = [];
    let retainedEarnings = [];
    let commonStock = [];
    let commonStockSharesOutstanding = [];

    try{
         await fetch(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${finItemSymbol}&apikey=${API_KEY}`)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log("From getBalanceSheet" + data);

                    for (let key in data[timeFrame]) {
                        financialChartXValuesFunction.push(key);
                        fiscalDateEnding.push(data[timeFrame][key]['fiscalDateEnding']);
                        reportedCurrency.push(data[timeFrame][key]['reportedCurrency']);
                        totalAssets.push(data[timeFrame][key]['totalAssets']);
                        totalCurrentAssets.push(data[timeFrame][key]['totalCurrentAssets']);
                        cashAndCashEquivalentsAtCarryingValue.push(data[timeFrame][key]['cashAndCashEquivalentsAtCarryingValue']);
                        cashAndShortTermInvestments.push(data[timeFrame][key]['cashAndShortTermInvestments']);
                        inventory.push(data[timeFrame][key]['inventory']);
                        currentNetReceivables.push(data[timeFrame][key]['currentNetReceivables']);
                        totalNonCurrentAssets.push(data[timeFrame][key]['totalNonCurrentAssets']);
                        propertyPlantEquipment.push(data[timeFrame][key]['propertyPlantEquipment']);
                        accumulatedDepreciationAmortizationPPE.push(data[timeFrame][key]['accumulatedDepreciationAmortizationPPE']);
                        intangibleAssets.push(data[timeFrame][key]['intangibleAssets']);
                        intangibleAssetsExcludingGoodwill.push(data[timeFrame][key]['intangibleAssetsExcludingGoodwill']);
                        goodwill.push(data[timeFrame][key]['goodwill']);
                        investments.push(data[timeFrame][key]['investments']);
                        longTermInvestments.push(data[timeFrame][key]['longTermInvestments']);
                        shortTermInvestments.push(data[timeFrame][key]['shortTermInvestments']);
                        otherCurrentAssets.push(data[timeFrame][key]['otherCurrentAssets']);
                        otherNonCurrrentAssets.push(data[timeFrame][key]['otherNonCurrrentAssets']);
                        totalLiabilities.push(data[timeFrame][key]['totalLiabilities']);
                        totalCurrentLiabilities.push(data[timeFrame][key]['totalCurrentLiabilities']);
                        currentAccountsPayable.push(data[timeFrame][key]['currentAccountsPayable']);
                        deferredRevenue.push(data[timeFrame][key]['deferredRevenue']);
                        currentDebt.push(data[timeFrame][key]['currentDebt']);
                        shortTermDebt.push(data[timeFrame][key]['shortTermDebt']);
                        totalNonCurrentLiabilities.push(data[timeFrame][key]['totalNonCurrentLiabilities']);
                        capitalLeaseObligations.push(data[timeFrame][key]['capitalLeaseObligations']);
                        longTermDebt.push(data[timeFrame][key]['longTermDebt']);
                        currentLongTermDebt.push(data[timeFrame][key]['currentLongTermDebt']);
                        longTermDebtNoncurrent.push(data[timeFrame][key]['longTermDebtNoncurrent']);
                        shortLongTermDebtTotal.push(data[timeFrame][key]['shortLongTermDebtTotal']);
                        otherCurrentLiabilities.push(data[timeFrame][key]['otherCurrentLiabilities']);
                        otherNonCurrentLiabilities.push(data[timeFrame][key]['otherNonCurrentLiabilities']);
                        totalShareholderEquity.push(data[timeFrame][key]['totalShareholderEquity']);
                        treasuryStock.push(data[timeFrame][key]['treasuryStock']);
                        retainedEarnings.push(data[timeFrame][key]['retainedEarnings']);
                        commonStock.push(data[timeFrame][key]['commonStock']);
                        commonStockSharesOutstanding.push(data[timeFrame][key]['commonStockSharesOutstanding']);                        

                    }
                    // This is correctly creating and filling the array with data console.log(data[timeFrame][1]);
                    console.log("Ends on: " + fiscalDateEnding[1]);

                })

        const balanceSheet = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            fiscalDateEndingValues: fiscalDateEnding,
            reportedCurrencyValues: reportedCurrency,
            totalAssetsValues: totalAssets,
            totalCurrentAssetsValues: totalCurrentAssets,
            cashAndCashEquivalentsAtCarryingValueValues: cashAndCashEquivalentsAtCarryingValue,
            cashAndShortTermInvestmentsValues: cashAndShortTermInvestments,
            inventoryValues: inventory,
            currentNetReceivablesValues: currentNetReceivables,
            totalNonCurrentAssetsValues: totalNonCurrentAssets,
            propertyPlantEquipmentValues: propertyPlantEquipment,
            accumulatedDepreciationAmortizationPPEValues: accumulatedDepreciationAmortizationPPE,
            intangibleAssetsValues: intangibleAssets,
            intangibleAssetsExcludingGoodwillValues: intangibleAssetsExcludingGoodwill,
            goodwillValues: goodwill,
            investmentsValues: investments,
            longTermInvestmentsValues: longTermInvestments,
            shortTermInvestmentsValues: shortTermInvestments,
            otherCurrentAssetsValues: otherCurrentAssets,
            otherNonCurrrentAssetsValues: otherNonCurrrentAssets,
            totalLiabilitiesValues: totalLiabilities,
            totalCurrentLiabilitiesValues: totalCurrentLiabilities,
            currentAccountsPayableValues: currentAccountsPayable,
            deferredRevenueValues: deferredRevenue,
            currentDebtValues: currentDebt,
            shortTermDebtValues: shortTermDebt,
            totalNonCurrentLiabilitiesValues: totalNonCurrentLiabilities,
            capitalLeaseObligationsValues: capitalLeaseObligations,
            longTermDebtValues: longTermDebt,
            currentLongTermDebtValues: currentLongTermDebt,
            longTermDebtNoncurrentValues: longTermDebtNoncurrent,
            shortLongTermDebtTotalValues: shortLongTermDebtTotal,
            otherCurrentLiabilitiesValues: otherCurrentLiabilities,
            otherNonCurrentLiabilitiesValues: otherNonCurrentLiabilities,
            totalShareholderEquityValues: totalShareholderEquity,
            treasuryStockValues: treasuryStock,
            retainedEarningsValues: retainedEarnings,
            commonStockValues: commonStock,
            commonStockSharesOutstandingValues: commonStockSharesOutstanding,
        };

        dispatch({
            type: GET_BALANCESHEET,
            payload: balanceSheet
        })
    }catch (e) {
        console.log(e)
    }
}