import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';

const DataTable = ({financialItem,financialItemName,color}) => {
    return (
        <Fragment>
            <Plot
                data={[
                    {
                        x: financialItem.financialChartXValues,
                        y: financialItem.financialChartCloseValues ,
                        type: 'bar',
                        //mode: 'lines',
                        marker: {color: color},
                    }
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
    color: PropTypes.string.isRequired,
}

export default DataTable;