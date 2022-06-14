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
import {getSearch} from "../actions/search";

const Search = ({search:{search},getSearch, keywords}) => {
    
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getSearch(keywords);            
            return;
        }

    },[]);


    const displayTheRightPlot = () => {
        console.log('Desde displayTheRightPlot Search ' + search.financialChartXValues)            
        return (<ul><li key='hola'>{search.resultsValues.toString()}</li></ul>);             
    };

    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {search ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

Search.propTypes = {
    search: PropTypes.object.isRequired,
    getSearch: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    search: state.financialItem
})

export default connect(mapStateToProps,{getSearch})(Search);