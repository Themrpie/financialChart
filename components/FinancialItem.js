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
        console.log(financialItem)
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
                return(<Income/>);
            default:
                return (<Sma/>);
        }    
        
    };
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