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
import {getMfi} from "../actions/mfi";

const Mfi = ({mfi:{mfi},getMfi}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getMfi('SPY');
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
                    color='brown'
                    mfi={mfi}
                    financialItemName={'MFI'}
                    financialItem={mfi}                    
                />);
            
    };

    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {mfi ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

Mfi.propTypes = {
    mfi: PropTypes.object.isRequired,
    getMfi: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    mfi: state.financialItem
})

export default connect(mapStateToProps,{getMfi})(Mfi);