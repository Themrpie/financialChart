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
import {getCashFlow} from "../actions/cashFlow";

//TODO:
//ADD symbol to IncomeStatement
//ADD getIncomeStatement(symbol, timeFrame)

const CashFlow = ({cashFlow:{cashFlow},getCashFlow, statement, symbol}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getCashFlow(symbol, 'quarterlyReports');            
            return;
        }

    },[]);


    const displayTheRightPlot = () => { 
        switch(statement){
            case 'operatingCashflow':
                return (<DataTable financialItemName={'Operating Cash Flow'} financialItem={cashFlow} statement={'operatingCashflow'}/>);
            case 'paymentsForOperatingActivities':
                return (<DataTable financialItemName={'Payments For Operating Activities'} financialItem={cashFlow} statement={'paymentsForOperatingActivities'}/>);
            case 'netIncome':
                return (<DataTable financialItemName={'Net Income'} financialItem={cashFlow} statement={'netIncome'}/>);
            case 'proceedsFromOperatingActivities':
                return (<DataTable financialItemName={'Proceeds From Operating Activities'} financialItem={cashFlow} statement={'proceedsFromOperatingActivities'}/>);
             case 'changeInOperatingLiabilities':
                return (<DataTable financialItemName={'Change In Operating Liabilities'} financialItem={cashFlow} statement={'changeInOperatingLiabilities'}/>);
             case 'changeInOperatingAssets':
                return (<DataTable financialItemName={'Change in Operating Assets'} financialItem={cashFlow} statement={'changeInOperatingAssets'}/>);
             case 'paymentsForRepurchaseOfEquityDepletionAndAmortization':
                return (<DataTable financialItemName={'Payments For Payments For Repurchase Of Equity Depletion & Amortization'} financialItem={cashFlow} statement={'paymentsForRepurchaseOfEquityDepletionAndAmortization'}/>);
             case 'capitalExpenditures':
                return (<DataTable financialItemName={'Capital Expenditures'} financialItem={cashFlow} statement={'capitalExpenditures'}/>);
             case 'changeInReceivables':
                return (<DataTable financialItemName={'Change In Receivables'} financialItem={cashFlow} statement={'changeInReceivables'}/>);            
            case 'changeInInventory':
                return (<DataTable financialItemName={'Change In Inventory'} financialItem={cashFlow} statement={'changeInInventory'}/>);
            case 'profitLoss':
                return (<DataTable financialItemName={'Profit / Loss'} financialItem={cashFlow} statement={'profitLoss'}/>);
            case 'cashflowFromInvestment':
                return (<DataTable financialItemName={'Cashflow From Investment'} financialItem={cashFlow} statement={'cashflowFromInvestment'}/>);
            case 'cashflowFromFinancing':
                return (<DataTable financialItemName={'Cashflow From Financing'} financialItem={cashFlow} statement={'cashflowFromFinancing'}/>);
            case 'proceedsFromRepaymentsOfShortTermDebt':
                return (<DataTable financialItemName={'Proceeds From Repayment Of Short Term Debt'} financialItem={cashFlow} statement={'proceedsFromRepaymentsOfShortTermDebt'}/>);
            case 'paymentsForRepurchaseOfCommonStock':
                return (<DataTable financialItemName={'Payments For Repurchase Of Common Stock'} financialItem={cashFlow} statement={'paymentsForRepurchaseOfCommonStock'}/>);
                case 'paymentsForRepurchaseOfEquity':
                return (<DataTable financialItemName={'Payments For Repurchase Of Equity'} financialItem={cashFlow} statement={'paymentsForRepurchaseOfEquity'}/>);
            case 'paymentsForRepurchaseOfPreferredStock':
                return (<DataTable financialItemName={'Payments For Repurchase Of Preferred Stock'} financialItem={cashFlow} statement={'paymentsForRepurchaseOfPreferredStock'}/>);
            case 'dividendPayout':
                return (<DataTable financialItemName={'Dividen Payout'} financialItem={cashFlow} statement={'dividendPayout'}/>);
            case 'dividendPayoutCommonStock':
                return (<DataTable financialItemName={'Dividen Payout Common Stock'} financialItem={cashFlow} statement={'dividendPayoutCommonStock'}/>);
            case 'dividendPayoutPreferredStock':
                return (<DataTable financialItemName={'Dividend Payout Preferred Stock'} financialItem={cashFlow} statement={'dividendPayoutPreferredStock'}/>);
            case 'proceedsFromIssuanceOfCommonStock':
                return (<DataTable financialItemName={'Proceeds From Issuance Of Common Stock'} financialItem={cashFlow} statement={'proceedsFromIssuanceOfCommonStock'}/>);
            case 'proceedsFromIssuanceOfPreferredStock':
                return (<DataTable financialItemName={'Proceeds From Issuance Of Preferred Stock'} financialItem={cashFlow} statement={'proceedsFromIssuanceOfPreferredStock'}/>);
            case 'proceedsFromRepurchaseOfEquity':
                return (<DataTable financialItemName={'Proceeds From Repurchase Of Equity'} financialItem={cashFlow} statement={'proceedsFromRepurchaseOfEquity'}/>);
            case 'proceedsFromSaleOfTreasuryStock':
                return (<DataTable financialItemName={'Proceeds From Sale Of Trasury Stock'} financialItem={cashFlow} statement={'proceedsFromSaleOfTreasuryStock'}/>);
            case 'changeInCashAndCashEquivalents':
                return (<DataTable financialItemName={'Change In Cash And Cash Equivalents'} financialItem={cashFlow} statement={'changeInCashAndCashEquivalents'}/>);
            case 'changeInExchangeRate':
                return (<DataTable financialItemName={'Change In Exchange Rate'} financialItem={cashFlow} statement={'changeInExchangeRate'}/>);
            case 'proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet':
                return (<DataTable financialItemName={'Proceeds From Issuance Of Long Term Debt & Capital Securities Net'} financialItem={cashFlow} statement={'changeInExchangeRate'}/>);
           
        } 
           
                
            
    };
// For some reason cashFlow is not defined
    return (
        <div className='financial-item-big-wrapper'>
            <div>
                {cashFlow ? displayTheRightPlot() : null}
            </div>
            
        </div>
    );
};

CashFlow.propTypes = {
    cashFlow: PropTypes.object.isRequired,
    getCashFlow: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
    cashFlow: state.financialItem
})

export default connect(mapStateToProps,{getCashFlow})(CashFlow);