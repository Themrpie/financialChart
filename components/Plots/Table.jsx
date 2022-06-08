import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';


//TODO: Use state to display y: 
const Table = ({financialItem}) => {
    //console.log("From DataTable: " + financialItem)
    return (        
            <Fragment><Plot data={[{
                type: 'table', 
                columnwidth: [150,600,1000,900,600,500,1000,1000,1000],
                header: {values: financialItem.financialChartXValues, line: {width: 50, color: 'green'}}, 
                cells: {values: financialItem.informationValues, font: {family: "Arial", size: 15, color: ["black"]}, line: {width: 50, color: 'red'}, 
                },

        },]}
            layout={{width: 900, height: 330, title: 'Company Overview'}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
    
        
    
};

Table.propTypes = {
    financialItem: PropTypes.object.isRequired,   
}


export default Table;