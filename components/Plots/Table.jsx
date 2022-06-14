import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';


//TODO: Use state to display y: 
const Table = ({financialItem}) => {
    //console.log("From DataTable: " + financialItem)
    return (        
            <Fragment><Plot data={[{
                type: 'table', 
                columnwidth: [80,400],
                header : { values: [["<b>Description</b>"], ["<b>Information</b>"]], fill: {color: '#119DFF'}, },
                cells: { align: "left", values: [financialItem.financialChartXValues,financialItem.informationValues], 
                font: {family: "Arial", size: 12, color: ["black"]}, line: {width: 1, color: 'grey'},
                fill: {color: ['#119DFF', 'white']},  
                },

        },]}
            layout={{width: 900, height: 1220, title: 'Company Overview'}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
    
        
    
};

Table.propTypes = {
    financialItem: PropTypes.object.isRequired,   
}


export default Table;