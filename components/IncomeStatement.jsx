import React, {useLayoutEffect, useRef, useState} from 'react';
// Components imports
import DataTable from "./Plots/DataTable";
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
import {getIncomeStatement} from "../actions/incomeStatement";

//TODO:
//ADD symbol to InconeStatement

const IncomeStatement = ({incomeStatement:{incomeStatement},getIncomeStatement, statement}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getIncomeStatement('TSLA');            
            return;
        }

    },[]);


    const displayTheRightPlot = () => { 
        switch(statement){
            case 'grossProfit':
                return (<DataTable financialItemName={'Gross Profit'} financialItem={incomeStatement} statement={'grossProfit'}/>);
            case 'costofGoodsAndServicesSold':
                return (<DataTable financialItemName={'Cost Of Goods and Services'} financialItem={incomeStatement} statement={'costofGoodsAndServicesSold'}/>);
            case 'netIncome':
                return (<DataTable financialItemName={'Net Income'} financialItem={incomeStatement} statement={'netIncome'}/>);
            case 'totalRevenue':
                return (<DataTable financialItemName={'Total Revenue'} financialItem={incomeStatement} statement={'totalRevenue'}/>);
             case 'costOfRevenue':
                return (<DataTable financialItemName={'Cost of Revenue'} financialItem={incomeStatement} statement={'costOfRevenue'}/>);
             case 'operatingIncome':
                return (<DataTable financialItemName={'Operating Income'} financialItem={incomeStatement} statement={'operatingIncome'}/>);
             case 'researchAndDevelopment':
                return (<DataTable financialItemName={'Research & Development'} financialItem={incomeStatement} statement={'researchAndDevelopment'}/>);
             case 'operatingExpenses':
                return (<DataTable financialItemName={'Operating Expenses'} financialItem={incomeStatement} statement={'operatingExpenses'}/>);
             case 'sellingGeneralAndAdministrative':
                return (<DataTable financialItemName={'Selling General & Admin'} financialItem={incomeStatement} statement={'sellingGeneralAndAdministrative'}/>);            
            case 'investmentIncomeNet':
                return (<DataTable financialItemName={'Net Investmet Income'} financialItem={incomeStatement} statement={'investmentIncomeNet'}/>);
            case 'netInterestIncome':
                return (<DataTable financialItemName={'Net Interest Income'} financialItem={incomeStatement} statement={'netInterestIncome'}/>);
            case 'interestIncome':
                return (<DataTable financialItemName={'Interest Income'} financialItem={incomeStatement} statement={'interestIncome'}/>);
            case 'interestExpense':
                return (<DataTable financialItemName={'Interest Expense'} financialItem={incomeStatement} statement={'interestExpense'}/>);
            case 'nonInterestIncome':
                return (<DataTable financialItemName={'Non Interest Income'} financialItem={incomeStatement} statement={'nonInterestIncome'}/>);
            case 'otherNonOperatingIncome':
                return (<DataTable financialItemName={'Other Non Operating Income'} financialItem={incomeStatement} statement={'otherNonOperatingIncome'}/>);
                case 'depreciation':
                return (<DataTable financialItemName={'Depreciation'} financialItem={incomeStatement} statement={'depreciation'}/>);
            case 'depreciationAndAmortization':
                return (<DataTable financialItemName={'Depreciation & Amortization'} financialItem={incomeStatement} statement={'depreciationAndAmortization'}/>);
            case 'incomeBeforeTax':
                return (<DataTable financialItemName={'Income Before Tax'} financialItem={incomeStatement} statement={'incomeBeforeTax'}/>);
            case 'interestAndDebtExpense':
                return (<DataTable financialItemName={'Interest & Debt Expense'} financialItem={incomeStatement} statement={'interestAndDebtExpense'}/>);
            case 'netIncomeFromContinuingOperations':
                return (<DataTable financialItemName={'Net Income From Continuing Operations'} financialItem={incomeStatement} statement={'netIncomeFromContinuingOperations'}/>);
            case 'comprehensiveIncomeNetOfTax':
                return (<DataTable financialItemName={'Comprehensive Income Net of Tax'} financialItem={incomeStatement} statement={'comprehensiveIncomeNetOfTax'}/>);
            case 'ebit':
                return (<DataTable financialItemName={'EBIT'} financialItem={incomeStatement} statement={'ebit'}/>);
            case 'ebitda':
                return (<DataTable financialItemName={'EBITDA'} financialItem={incomeStatement} statement={'ebitda'}/>);
           
        } 
           
                
            
    };
// For some reason incomeStatement is not defined
    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {incomeStatement ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

IncomeStatement.propTypes = {
    incomeStatement: PropTypes.object.isRequired,
    getIncomeStatement: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    incomeStatement: state.financialItem
})

export default connect(mapStateToProps,{getIncomeStatement})(IncomeStatement);