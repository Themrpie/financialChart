import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';


//TODO: Use state to display y: 
const DataTable = ({financialItem,financialItemName, statement}) => {
    console.log("From DataTable: " + financialItem)
    switch (statement) {
        //CashFlow
        case 'changeInOperatingLiabilities':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.changeInOperatingLiabilitiesValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'operatingCashflow':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.operatingCashflowValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'paymentsForOperatingActivities':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.paymentsForOperatingActivitiesValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );        
        case 'proceedsFromOperatingActivities':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.proceedsFromOperatingActivitiesValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'changeInOperatingLiabilities':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.changeInOperatingLiabilitiesValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
            );
        case 'proceedsFromOperatingActivities':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.proceedsFromOperatingActivitiesValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'proceedsFromOperatingActivities':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.proceedsFromOperatingActivitiesValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'proceedsFromOperatingActivities':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.proceedsFromOperatingActivitiesValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );


        //Earnings
    
        case 'surpriseEARNIGASDJINASKJHD':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.reportedEPSValue},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'earnings':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.reportedEPSValue},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );


        // INCOME STATEMENTS
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
        case 'investmentIncomeNet':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.investmentIncomeNetValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'netInterestIncome':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.netInterestIncomeValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'interestIncome':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.interestIncomeValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'interestExpense':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.interestExpenseValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'nonInterestIncome':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.nonInterestIncomeValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'otherNonOperatingIncome':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.otherNonOperatingIncome},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'depreciation':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.depreciationValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'depreciationAndAmortization':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.depreciationAndAmortizationValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'incomeBeforeTax':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.incomeBeforeTaxValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'incomeTaxExpense':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.incomeTaxExpenseValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'interestAndDebtExpense':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.interestAndDebtExpenseValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'netIncomeFromContinuingOperations':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.netIncomeFromContinuingOperationsValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        );
        case 'comprehensiveIncomeNetOfTax':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.comprehensiveIncomeNetOfTaxValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        ); 
        case 'ebit':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.ebitValues},]}
            layout={{width: 900, height: 640, title: financialItemName}} options ={ {displaylogo: 'false'} }/></Fragment>
        ); 
        case 'ebitda':
                return (        
            <Fragment><Plot data={[{type: 'bar', x: financialItem.fiscalDateEndingValues, y: financialItem.ebitdaValues},]}
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