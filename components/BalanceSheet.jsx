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
import {getBalanceSheet} from "../actions/balanceSheet";

//Creates name
function unCamel (str){
    return str
        // insert a space between lower & upper
         .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
}

const BalanceSheet = ({balanceSheet:{balanceSheet},getBalanceSheet, statement, symbol}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getBalanceSheet(symbol, 'quarterlyReports');            
            return;
        }

    },[]);


    const displayTheRightPlot = () => {            
        return (<DataTable financialItemName={unCamel(statement)} financialItem={balanceSheet} statement={statement}/>);             
    };

    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {balanceSheet ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

BalanceSheet.propTypes = {
    balanceSheet: PropTypes.object.isRequired,
    getBalanceSheet: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    balanceSheet: state.financialItem
})

export default connect(mapStateToProps,{getBalanceSheet})(BalanceSheet);