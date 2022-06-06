import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';


//TODO: Use state to display y: 
const DataTable = ({financialItem,financialItemName, statement}) => {
    console.log("From DataTable: " + financialItem)
    return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem[`${statement}Values`]},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
    
        
    
};

DataTable.propTypes = {
    financialItem: PropTypes.object.isRequired,
    financialItemName: PropTypes.string.isRequired,    
}


export default DataTable;