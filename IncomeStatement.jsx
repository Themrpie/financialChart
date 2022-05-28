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

const IncomeStatement = ({incomeStatement:{incomeStatement},getIncomeStatement}, symbol) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getIncomeStatement(symbol);            
            return;
        }

    },[]);


    const displayTheRightPlot = () => {        
                return (<DataTable                    
                    incomeStatement={incomeStatement}
                    financialItemName={'Income Statement'}
                    financialItem={incomeStatement}
                />);
            
    };

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