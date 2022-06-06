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
import {getCashFlow} from "../actions/cashFlow";

//Creates name
function unCamel (str){
    return str
        // insert a space between lower & upper
         .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
}

const CashFlow = ({cashFlow:{cashFlow},getCashFlow, statement, symbol}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getCashFlow(symbol, 'quarterlyReports');            
            return;
        }

    },[]);


    const displayTheRightPlot = () => {            
        return (<DataTable financialItemName={unCamel(statement)} financialItem={cashFlow} statement={statement}/>);             
    };
// For some reason cashFlow is not defined
    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {cashFlow ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

CashFlow.propTypes = {
    cashFlow: PropTypes.object.isRequired,
    getCashFlow: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    cashFlow: state.financialItem
})

export default connect(mapStateToProps,{getCashFlow})(CashFlow);