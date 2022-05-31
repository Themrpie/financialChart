import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';

const DataTable = ({financialItem,financialItemName, statement}) => {
    console.log("From DataTable: " + financialItem)
    switch (statement) {
        case 'grossProfit':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.grossProfitValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'totalRevenue':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.totalRevenueValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'costOfRevenue':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.costOfRevenueValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'costofGoodsAndServicesSold':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.costofGoodsAndServicesSoldValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'netIncome':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.netIncomeValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'operatingIncome':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.operatingIncomeValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'researchAndDevelopment':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.researchAndDevelopmentValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'operatingExpenses':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.operatingExpensesValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'sellingGeneralAndAdministrative':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.sellingGeneralAndAdministrativeValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );              
        default:
            return (<Fragment>
                <Plot
                    data={[
                        {type: 'bar', 
                        x: financialItem.fiscalDateEndingValues, 
                        y: financialItem.totalRevenueValues},
                    ]}
                    layout={{width: 900, height: 640, title: financialItemName}}
                    options ={ {displaylogo: 'true'} }
                />
            </Fragment>);
    }
        
    
};

DataTable.propTypes = {
    financialItem: PropTypes.object.isRequired,
    financialItemName: PropTypes.string.isRequired,    
}


export default DataTable;