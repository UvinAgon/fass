import React, { Component } from 'react';
// import BalanceDashboard from '../components/balanceDashboard';
// import Transactions from '../components/transactions';
// import Balance from '../components/balanceCard';
import Balance from './balanceCardLight';
import AddTransaction from './addTransactionLightFunc';

class PageFinanceLight extends Component {
    state = {  } 
    hrzFlow={
        display: `flex`, flexDirection: `row`
    }
    pagination={
        backgroundColor:`#050b1f`,
        height: `710px`,
        minWidth: `250px`,
    }
    contentBody={
        // minWidth: `1000px`,
    }
    table={
        backgroundImage: `linear-gradient(45deg,#152d54 45%,#548ec9 70%,#152d54 95%)`,
        backgroundColor:`#42a99b`,
        height: `525px`
    }
    render() { 
        return (
            <div style={this.hrzFlow}>
                <div style={this.contentBody} className='col-md-9'>
                    {/* <div style={this.hrzFlow}>
                        <BalanceDashboard/>
                    </div>
                    <div style={this.table}><Transactions/></div> */}
                </div>
                <div style={this.pagination} className='col-md-3'>
                    <div style={{backgroundColor:`#42a99b`, height: `180px`}}><Balance/></div>
                    <div style={{backgroundColor:`#16443e`, height: `500px`}}><AddTransaction/></div>
                </div>
            </div>
        );
    }
}
 
export default PageFinanceLight;