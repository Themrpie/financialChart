import React, {useLayoutEffect, useRef, useState} from 'react';
// Components imports
import LineChart from "./Plots/LineChart";
import CandleStickChart from "./Plots/CandleStickChart";
// Material UI imports
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import SearchBar from "@material-ui/core/TextField";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {financialItemStyle} from './styles/financialItemStyle'
// Redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

import {getFinancialItem} from "../actions/financialItem";
import {getSearch} from "../actions/search";
import {getBalanceSheet} from "../actions/balanceSheet";
import {getCashFlow} from "../actions/cashFlow";
import {getIncomeStatement} from "../actions/incomeStatement";

import Sma from "./Sma";
import Rsi from "./Rsi";
import Atr from "./Atr";
import Mfi from "./Mfi";
import Bop from "./Bop";
import Income from "./IncomeStatement";
import Earnings from "./Earnings";
import CashFlow from "./CashFlow";
import BalanceSheet from "./BalanceSheet";
import CompanyOverview from "./CompanyOverview";
import Search from "./Search";

const FinancialItem = ({financialItem:{financialItem},getFinancialItem, getSearch, getBalanceSheet, getCashFlow, getIncomeStatement}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const [indicators,setIndicators] = useState('indicators');
    const [statements,setStatements] = useState('statements');
    const [symbol,setSymbol] = useState('symbol');
    const [cashFlow,setCashFlow] = useState('cashFlow');
    const [balanceSheet, setBalanceSheet] = useState('balanceSheet');
    const [search, setSearch] = useState(''); 

    const firstUpdate = useRef(true);


    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getFinancialItem('TSLA');            
            return;
        }
    },[]);

     const handleSymbolChange = e => {
        //IF YOU INSERT TOO MANY REQUEST HERE YOU WILL MAKE MORE API REQUESTS THAN YOU CAN WITH A FREE API
        //setSymbol(e.target.value);
        getFinancialItem(e.target.value);
        getBalanceSheet(e.target.value, 'quarterlyReports');
        getCashFlow(e.target.value, 'quarterlyReports');
        getIncomeStatement(e.target.value, 'quarterlyReports');
        
    };
    const handleChartChange = e => {
        setTypeOfChart(e.target.value);
    };
    const handleIndicatorsChange = e => {
        setIndicators(e.target.value);
    };
    const handleStatementsChange = e => {
        setStatements(e.target.value);
    };
    const handleCashFlowChange = e => {
        setCashFlow(e.target.value);
    }
    const handleBalanceSheetChange = e => {
        setBalanceSheet(e.target.value);
    }
    const handleSearchChange = e => {        
        //if (e.target.value.length >= 2){
        setSearch(e.target.value);
        getSearch(e.target.value);
        //}
        
    }

    //Display price chart in lines or candles.
    const displayPrice = () => {
        switch (typeOfChart) {
            case 'line':
                return (<LineChart color='green' financialItem={financialItem} financialItemName={financialItem.symbol}/>);
            case 'candlestick':
                return (<CandleStickChart financialItem={financialItem} financialItemName={financialItem.symbol}/>);
            default:
                return (<LineChart color='blue' financialItem={financialItem} financialItemName={financialItem.symbol}/>);
        }
    }
    
    //Display indicators
    const displayTheRightPlot = () => {
        switch (indicators) {
            case 'sma':
                return (<Sma/>);
            case 'rsi':
                return (<Rsi/>);
            case 'atr':
                return (<Atr/>);
            case 'mfi':
                return (<Mfi/>);
            case 'bop':
                return (<Bop/>);
            case 'earnings':
                return(<Earnings symbol={financialItem.symbol}/>);
            case 'surprisePercentage':
                return(<Earnings symbol={financialItem.symbol}/>);
            case 'overview':
                return(<CompanyOverview symbol={financialItem.symbol} />);            
        }        
    };

    const displayStatement = () => {
        return (<Income statement={statements} symbol={financialItem.symbol} />);    
    }

    const displayCashFlow = () => {
        return (<CashFlow statement={cashFlow} symbol={financialItem.symbol} />);
    }

    const displayBalanceSheet = () => {
        return (<BalanceSheet statement={balanceSheet} symbol={financialItem.symbol} />);
    }
    
    const displaySearch = () => {
        return (<SearchBar
          id="searchBar"
          defaultValue={financialItem.symbol}
          fullWidth
          label="Search symbol"
          variant="outlined" 
          onChange={handleSearchChange}
        />);
    }
    const displayList = () => {
        return (<Search keywords = {search} />);
    }

    return (

        <div className='financial-item-big-wrapper'>
        <div>

                {financialItem ? displaySearch() : null }
            </div> 
            <div>

                {financialItem ? displayList() : null }
            </div> 
        <FormControl className={classes.formControl} id='symbol-form-control'>
                            <InputLabel shrink id="symbol-select-label">
                                Symbols
                            </InputLabel>
                            <Select
                                labelId="symbol-select-label"
                                id="symbol-chart-select"
                                value={symbol} 
                                onChange={handleSymbolChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'SPY'}><em>SPY</em></MenuItem>
                                <MenuItem value={'AAPL'}>Apple</MenuItem>
                                <MenuItem value={'TSLA'}>Tesla</MenuItem>
                                <MenuItem value={'AMZN'}>Amazon</MenuItem>
                                <MenuItem value={'MSFT'}>Microsoft</MenuItem>                                
                            </Select>
                        </FormControl>
                        
                {
                    financialItem ?
                        <FormControl className={classes.formControl} id='stock-type-of-chart-form-control'>
                            <InputLabel shrink id="type-of-chart-select-label">
                                Type of Chart
                            </InputLabel>
                            <Select
                                labelId="type-of-chart-select-label"
                                id="type-of-chart-select"
                                value={typeOfChart}
                                onChange={handleChartChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'line'}><em>Line</em></MenuItem>
                                <MenuItem value={'candlestick'}>CandleStick</MenuItem>
                            </Select>
                        </FormControl> : null
                }
            

         <div>
                {financialItem ? displayPrice() : null }
                <div>
                {
                    <FormControl className={classes.formControl} id='indicator-form-control'>
                            <InputLabel shrink id="indicator-select-label">
                                Indicators
                            </InputLabel>
                            <Select
                                labelId="indicator-select-label"
                                id="indicator-chart-select"
                                value={indicators} 
                                onChange={handleIndicatorsChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'sma'}><em>Simple Moving Average</em></MenuItem>
                                <MenuItem value={'rsi'}>Relative Strength Index</MenuItem>
                                <MenuItem value={'atr'}>Average True Range</MenuItem>
                                <MenuItem value={'mfi'}>Money Flow Index</MenuItem>
                                <MenuItem value={'bop'}>Balance of Power</MenuItem>
                                <MenuItem value={'earnings'}>Earnings</MenuItem>
                                <MenuItem value={'surprisePercentage'}>Earnings Surprise Percentage</MenuItem>
                                <MenuItem value={'overview'}>Overview</MenuItem>
                            </Select>
                        </FormControl>

                         
                }
                <FormControl className={classes.formControl} id='indicator-form-control'>
                            <InputLabel shrink id="indicator-select-label">
                                Income Statements
                            </InputLabel>
                            <Select
                                labelId="statements-select-label"
                                id="statements-chart-select"
                                value={statements} 
                                onChange={handleStatementsChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'netIncome'}>Net Income</MenuItem>                            
                                <MenuItem value={'grossProfit'}><em>Gross Profit</em></MenuItem>
                                <MenuItem value={'totalRevenue'}>Total Revenue</MenuItem>
                                <MenuItem value={'costOfRevenue'}>Cost of revenue</MenuItem>
                                <MenuItem value={'costofGoodsAndServicesSold'}>Cost of Goods And Services</MenuItem>
                                <MenuItem value={'operatingIncome'}>Operating Income</MenuItem>
                                <MenuItem value={'researchAndDevelopment'}>Research & Development</MenuItem>
                                <MenuItem value={'operatingExpenses'}>Operating Expenses</MenuItem>
                                <MenuItem value={'sellingGeneralAndAdministrative'}>Selling Gral & Admin </MenuItem>
                                <MenuItem value={'investmentIncomeNet'}>Net Investment Income</MenuItem>
                                <MenuItem value={'netInterestIncome'}>Net Interest Income</MenuItem>
                                <MenuItem value={'interestIncome'}>Interest Income</MenuItem>
                                <MenuItem value={'interestExpense'}>Interest Expense</MenuItem>
                                <MenuItem value={'nonInterestIncome'}>Non Interest Income</MenuItem>
                                <MenuItem value={'otherNonOperatingIncome'}>Other non Operating Income</MenuItem>
                                <MenuItem value={'depreciation'}>Depreciation</MenuItem>
                                <MenuItem value={'depreciationAndAmortization'}>Depreciation & Amortization</MenuItem>
                                <MenuItem value={'incomeBeforeTax'}>Income Before Tax</MenuItem>
                                <MenuItem value={'incomeTaxExpense'}>Tax Expense Income</MenuItem>
                                <MenuItem value={'interestAndDebtExpense'}>Interest and Debt Expense</MenuItem>
                                <MenuItem value={'netIncomeFromContinuingOperations'}>Continuing Operations Income Net</MenuItem>
                                <MenuItem value={'comprehensiveIncomeNetOfTax'}>Comprehensive Income Net of Tax</MenuItem>
                                <MenuItem value={'ebit'}>EBIT</MenuItem>
                                <MenuItem value={'ebitda'}>EBITDA</MenuItem>
                                

                            </Select>
                        </FormControl> 
                        <FormControl className={classes.formControl} id='cashFlow-form-control'>
                            <InputLabel shrink id="cashFlow-select-label">
                                Cash Flow
                            </InputLabel>
                            <Select
                                labelId="cashFlow-select-label"
                                id="cashFlow-chart-select"
                                value={cashFlow} 
                                onChange={handleCashFlowChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'operatingCashflow'}>Operating Cash Flow</MenuItem>                            
                                <MenuItem value={'paymentsForOperatingActivities'}><em>Payments For Operating Activities</em></MenuItem>
                                <MenuItem value={'proceedsFromOperatingActivities'}>Proceeds From Operating Activities</MenuItem>
                                <MenuItem value={'changeInOperatingLiabilities'}>Change In Operating Liabilities</MenuItem>
                                <MenuItem value={'changeInOperatingAssets'}>Change in Operating Assets</MenuItem>
                                <MenuItem value={'paymentsForRepurchaseOfEquityDepletionAndAmortization'}>Payments For Payments For Repurchase Of Equity Depletion & Amortization</MenuItem>
                                <MenuItem value={'capitalExpenditures'}>Capital Expenditures</MenuItem>
                                <MenuItem value={'changeInReceivables'}>Change In Receivables</MenuItem>
                                <MenuItem value={'changeInInventory'}>Change In Inventory </MenuItem>
                                <MenuItem value={'profitLoss'}>Profit / Loss</MenuItem>
                                <MenuItem value={'cashflowFromInvestment'}>Cashflow From Investment</MenuItem>
                                <MenuItem value={'cashflowFromFinancing'}>Cashflow From Financing</MenuItem>
                                <MenuItem value={'proceedsFromRepaymentsOfShortTermDebt'}>Proceeds From Repayment Of Short Term Debt</MenuItem>
                                <MenuItem value={'paymentsForRepurchaseOfCommonStock'}>Payments For Repurchase Of Common Stock</MenuItem>
                                <MenuItem value={'paymentsForRepurchaseOfEquity'}>Payments For Repurchase Of Equity</MenuItem>
                                <MenuItem value={'paymentsForRepurchaseOfPreferredStock'}>Payments For Repurchase Of Preferred Stock</MenuItem>
                                <MenuItem value={'dividendPayout'}>Dividen Payout</MenuItem>
                                <MenuItem value={'dividendPayoutCommonStock'}>Dividen Payout Common Stock</MenuItem>
                                <MenuItem value={'dividendPayoutPreferredStock'}>Dividend Payout Preferred Stock</MenuItem>
                                <MenuItem value={'proceedsFromIssuanceOfCommonStock'}>Proceeds From Issuance Of Common Stock</MenuItem>
                                <MenuItem value={'proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet'}>Proceeds From Issuance Of Long Term Debt & Capital Securities Net</MenuItem>
                                <MenuItem value={'proceedsFromIssuanceOfPreferredStock'}>Proceeds From Issuance Of Preferred Stock</MenuItem>
                                <MenuItem value={'proceedsFromRepurchaseOfEquity'}>Proceeds From Repurchase Of Equity</MenuItem>
                                <MenuItem value={'proceedsFromSaleOfTreasuryStock'}>Proceeds From Sale Of Trasury Stock</MenuItem>
                                <MenuItem value={'changeInCashAndCashEquivalents'}>Change In Cash And Cash Equivalents</MenuItem>
                                <MenuItem value={'changeInExchangeRate'}>Change In Exchange Rate</MenuItem>
                                <MenuItem value={'netIncome'}>Net Income</MenuItem>                                
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} id='balanceSheet-form-control'>
                            <InputLabel shrink id="balanceSheet-select-label">
                                Balance Sheet
                            </InputLabel>
                            <Select
                                labelId="balanceSheet-select-label"
                                id="balanceSheet-chart-select"
                                value={balanceSheet} 
                                onChange={handleBalanceSheetChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={'totalAssets'}>Total Assets</MenuItem>                            
                                <MenuItem value={'totalCurrentAssets'}><em>Total Current Assets</em></MenuItem>
                                <MenuItem value={'cashAndCashEquivalentsAtCarryingValue'}>Cash And Cash Equivalents At Carrying Value</MenuItem>
                                <MenuItem value={'cashAndShortTermInvestments'}>Cash And Short Term Investments</MenuItem>
                                <MenuItem value={'inventory'}>Inventory</MenuItem>
                                <MenuItem value={'currentNetReceivables'}>Current Net Receivables</MenuItem>
                                <MenuItem value={'totalNonCurrentAssets'}>Total Non Curren Assets</MenuItem>
                                <MenuItem value={'propertyPlantEquipment'}>Property Plant Equipment</MenuItem>
                                <MenuItem value={'accumulatedDepreciationAmortizationPPE'}>Accumulated Depreciation Amortization PPE </MenuItem>
                                <MenuItem value={'intangibleAssets'}>Intangible Assets</MenuItem>
                                <MenuItem value={'intangibleAssetsExcludingGoodwill'}>Intangible Assets Excluding Goodwill</MenuItem>
                                <MenuItem value={'goodwill'}>Goodwill</MenuItem>
                                <MenuItem value={'investments'}>Investments</MenuItem>
                                <MenuItem value={'shortTermInvestments'}>Short Term Investments</MenuItem>
                                <MenuItem value={'otherCurrentAssets'}>Other Current Assets</MenuItem>
                                <MenuItem value={'otherNonCurrrentAssets'}>Other Non Currrent Assets</MenuItem>
                                <MenuItem value={'totalLiabilities'}>Total Liabilities</MenuItem>
                                <MenuItem value={'totalCurrentLiabilities'}>Total Current Liabilities</MenuItem>
                                <MenuItem value={'currentAccountsPayable'}>Current Accounts Payable</MenuItem>
                                <MenuItem value={'deferredRevenue'}>Deferred Revenue</MenuItem>
                                <MenuItem value={'currentDebt'}>Current Debt</MenuItem>
                                <MenuItem value={'shortTermDebt'}>Short Term Debt</MenuItem>
                                <MenuItem value={'totalNonCurrentLiabilities'}>Total Non Current Liabilities</MenuItem>
                                <MenuItem value={'capitalLeaseObligations'}>Capital Lease Obligations</MenuItem>
                                <MenuItem value={'longTermDebt'}>Long Term Debt</MenuItem>
                                <MenuItem value={'currentLongTermDebt'}>Current Long Term Debt</MenuItem>
                                <MenuItem value={'longTermDebtNoncurrent'}>Long Term Debt Noncurrent</MenuItem>                                
                                <MenuItem value={'shortLongTermDebtTotal'}>Short Long Term Debt Total</MenuItem>
                                <MenuItem value={'otherCurrentLiabilities'}>Other Current Liabilities</MenuItem>
                                <MenuItem value={'otherNonCurrentLiabilities'}>Other Non Current Liabilities</MenuItem>
                                <MenuItem value={'totalShareholderEquity'}>Total Shareholder Equity</MenuItem>
                                <MenuItem value={'treasuryStock'}>TreasuryStock</MenuItem>
                                <MenuItem value={'retainedEarnings'}>RetainedEarnings</MenuItem>
                                <MenuItem value={'commonStock'}>Common Stock</MenuItem>
                                <MenuItem value={'commonStockSharesOutstanding'}>Common Stock Shares Outstanding</MenuItem>                              
                            </Select>
                        </FormControl>  
                <div>

                
                </div>
                <div>

                
                </div>

                <div>

                
                </div>
            </div>
            
            
            </div>
         
            <div>

                {financialItem ? displayTheRightPlot() : null }
            </div>
            <div>
                {financialItem ? displayBalanceSheet() : null }
            </div>


            <div>

                {financialItem ? displayStatement() : null }
            </div>
            <div>

                {financialItem ? displayCashFlow() : null }
            </div>

                        
        </div>
    );
};

FinancialItem.propTypes = {
    financialItem: PropTypes.object.isRequired,
    getFinancialItem: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    financialItem: state.financialItem
    //ADD other states?
})

//This may not be the way to do it, as sat mapStateToProps should not be used with async functions as I' doing
export default connect(mapStateToProps,{getFinancialItem, getSearch, getBalanceSheet, getCashFlow, getIncomeStatement})(FinancialItem);