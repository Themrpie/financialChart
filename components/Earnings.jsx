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
import {getEarnings} from "../actions/earnings";

//TODO:
//ADD symbol to IncomeStatement
//ADD getIncomeStatement(symbol, timeFrame)

const Earnings = ({earnings:{earnings},getEarnings, symbol}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getEarnings(symbol, 'quarterlyEarnings');            
            return;
        }

    },[]);


    const displayTheRightPlot = () => {  
        
            return (<DataTable financialItemName={'Earnings Per Share'} statement='earnings' financialItem={earnings}/>);                            
    };

    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {earnings ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

Earnings.propTypes = {
    earnings: PropTypes.object.isRequired,
    getEarnings: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    earnings: state.financialItem
})

export default connect(mapStateToProps,{getEarnings})(Earnings);