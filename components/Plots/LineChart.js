import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';

const LineChart = ({financialItem,financialItemName,color}) => {
    return (
        <Fragment>
            <Plot
                data={[
                    {
                        x: financialItem.financialChartXValues,
                        y: financialItem.financialChartCloseValues ,
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: color},
                    }
                ]}
                layout={{width: 900, height: 640, 
                    title: {text:financialItemName,font: {size: 24},xref: 'paper',},
                    plot_bgcolor:"#FFF3", paper_bgcolor:"#FFF3",
                }}
                options ={ {displaylogo: 'true'} }
            />
        </Fragment>
    );
};

LineChart.propTypes = {
    financialItem: PropTypes.object.isRequired,
    financialItemName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default LineChart;