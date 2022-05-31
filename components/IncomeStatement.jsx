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

const IncomeStatement = ({incomeStatement:{incomeStatement},getIncomeStatement, statement}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getIncomeStatement('AAPL');            
            return;
        }

    },[]);


    const displayTheRightPlot = () => { 
        switch(statement){
            case 'grossProfit':
                return (<DataTable financialItemName={'Gross Profit'} financialItem={incomeStatement} statement={'costofGoodsAndServicesSold'}/>);
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