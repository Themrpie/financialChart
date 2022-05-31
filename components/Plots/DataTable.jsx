import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';

const DataTable = ({financialItem,financialItemName}) => {
    console.log(financialItem)
    return (        
        <Fragment>
            <Plot
                data={[
                    {type: 'bar', 
                    x: financialItem.financialChartOpenValues, 
                    y: financialItem.financialChartHighValues},
                ]}
                layout={{width: 900, height: 640, title: financialItemName}}
                options ={ {displaylogo: 'true'} }
            />
        </Fragment>
    );
};
DataTable.propTypes = {
    financialItem: PropTypes.object.isRequired,
    financialItemName: PropTypes.string.isRequired,    
}


export default DataTable;