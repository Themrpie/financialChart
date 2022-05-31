import React, {useLayoutEffect, useRef, useState} from 'react';
// Components imports
import LineChart from "./Plots/LineChart";
import CandleStickChart from "./Plots/CandleStickChart";
// Material UI imports
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {financialItemStyle} from './styles/financialItemStyle'
// Redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

import {getFinancialItem} from "../actions/financialItem";
import Sma from "./Sma";
import Rsi from "./Rsi";
import Atr from "./Atr";
import Mfi from "./Mfi";
import Bop from "./Bop";
import Income from "./IncomeStatement";

const FinancialItem = ({financialItem:{financialItem},getFinancialItem}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const [indicators,setIndicators] = useState('indicators');
    const [statements,setStatements] = useState('statements');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getFinancialItem('SPY');            
            return;
        }

    },[]);

    const handleChartChange = e => {
        setTypeOfChart(e.target.value);
    };
    const handleIndicatorsChange = e => {
        setIndicators(e.target.value);
    };
    const handleStatementsChange = e => {
        setStatements(e.target.value);
    };
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
            case 'income':
                return(<Income statement='researchAndDevelopment'/>);
            default:
                return (<Sma/>);
        }        
    };

    const displayStatement = () => {
        switch(statements){
            case 'netIncome':
                return(<Income statement='netIncome'/>);
            case 'grossProfit':
                return(<Income statement='grossProfit'/>);
            case 'totalRevenue':
                return(<Income statement='totalRevenue'/>);
            case 'costOfRevenue':
                return(<Income statement='costOfRevenue'/>);
            case 'costofGoodsAndServicesSold':
                return(<Income statement='costofGoodsAndServicesSold'/>);
            case 'operatingIncome':
                return(<Income statement='operatingIncome'/>);
            case 'researchAndDevelopment':
                return(<Income statement='researchAndDevelopment'/>);
            case 'operatingExpenses':
                return(<Income statement='operatingExpenses'/>);
            case 'sellingGeneralAndAdministrative':
                return(<Income statement='sellingGeneralAndAdministrative'/>);
            case 'investmentIncomeNet':
                return(<Income statement='investmentIncomeNet'/>);
            case 'netInterestIncome':
                return(<Income statement='netInterestIncome'/>);
            case 'interestIncome':
                return(<Income statement='interestIncome'/>);
            case 'nonInterestIncome':
                return(<Income statement='nonInterestIncome'/>);
            case 'otherNonOperatingIncome':
                return(<Income statement='otherNonOperatingIncome'/>); 
        }
    }

    
    //Display Price chart
    return (
        <div className='financial-item-big-wrapper'>
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
                                <MenuItem value={'income'}>Income Statement</MenuItem>
                            </Select>
                        </FormControl>

                         
                }
                <div>
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
                                <MenuItem value={'researchAndDevelopment'}>Research & Davelopment</MenuItem>
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
                </div>
            </div>
            
            <div>
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
            </div>
            </div>
         
            <div>

                {financialItem ? displayTheRightPlot() : null }
            </div>
            <div>

                {financialItem ? displayStatement() : null }
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
})

export default connect(mapStateToProps,{getFinancialItem})(FinancialItem);