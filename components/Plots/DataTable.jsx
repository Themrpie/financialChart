import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';


//TODO: Use state to display y: 
const DataTable = ({financialItem,financialItemName, statement}) => {
    //color bars: marker: {color: 'rgb(94, 142, 214)'}   
    return (        
            <Fragment><Plot data={[{type: 'bar', marker: {color: 'rgb(94, 142, 214)'}, opacity: 0.7,
            x: financialItem.fiscalDateEndingValues, y: financialItem[`${statement}Values`]},]}
            layout={{width: 900, height: 640, 
            title: {text:financialItemName,font: {size: 24},xref: 'paper',},
            plot_bgcolor:"#FFF3", paper_bgcolor:"#FFF3",
            bargap:0.4}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
    
        
    
};

DataTable.propTypes = {
    financialItem: PropTypes.object.isRequired,
    financialItemName: PropTypes.string.isRequired,    
}


export default DataTable;