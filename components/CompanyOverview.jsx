import React, {useLayoutEffect, useRef, useState} from 'react';
// Components imports
import DataTable from "./Plots/DataTable";
import Table from "./Plots/Table";
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
import {getOverview} from "../actions/companyOverview";

//Creates name
function unCamel (str){
    return str
        // insert a space between lower & upper
         .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
}

const Overview = ({overview:{overview},getOverview, symbol}) => {
    const classes = financialItemStyle();
    //const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getOverview(symbol);            
            return;
        }

    },[]);


    const displayTheRightPlot = () => {            
        console.log("hola estas en CompanyOverview" + overview.financialChartXValues.toString());
        return (<Table financialItem={overview}/>);             
    };
// For some reason cashFlow is not defined
    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {overview ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

Overview.propTypes = {
    overview: PropTypes.object.isRequired,
    getOverview: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    overview: state.financialItem
})

export default connect(mapStateToProps,{getOverview})(Overview);