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
import {getSma} from "../actions/sma";

const Sma = ({sma:{sma},getSma}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getSma('SPY');
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
                    color='blue'
                    sma={sma}
                    financialItemName={'SMA'}
                />);
            
    };

    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {sma}
            </div>
            
        </div>
    );
};

sma.propTypes = {
    sma: PropTypes.object.isRequired,
    getSma: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    sma: state.financialItem
})

export default connect(mapStateToProps,{getSma})(sma);