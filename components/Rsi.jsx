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
import {getRsi} from "../actions/rsi";

const Rsi = ({rsi:{rsi},getRsi}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getRsi('SPY');
            //getFinancialItem('KO');
            return;
        }

    },[]);

    const handleChartChange = e => {
        setTypeOfChart(e.target.value);
    };

    const displayTheRightPlot = () => {
        //console.log(financialItem)
        
                return (<LineChart
                    color='green'
                    rsi={rsi}
                    financialItemName={'RSI'}
                    financialItem={rsi}
                    height='200'
                />);
            
    };

    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {rsi ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

Rsi.propTypes = {
    rsi: PropTypes.object.isRequired,
    getRsi: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    rsi: state.financialItem
})

export default connect(mapStateToProps,{getRsi})(Rsi);