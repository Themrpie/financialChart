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
import {getBop} from "../actions/bop";

const Bop = ({bop:{bop},getBop}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getBop('SPY');
            //getFinancialItem('KO');
            return;
        }

    },[]);


    const displayTheRightPlot = () => {        
                return (<LineChart
                    color='brown'
                    bop={bop}
                    financialItemName={'BOP'}
                    financialItem={bop}
                />);
            
    };

    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {bop ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

Bop.propTypes = {
    bop: PropTypes.object.isRequired,
    getBop: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    bop: state.financialItem
})

export default connect(mapStateToProps,{getBop})(Bop);