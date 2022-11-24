import React, { Component } from 'react';
import BalanceDashboard from './balanceDashboard';
import Transactions from './transactions';

class PageFinance extends Component {
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
                <div style={this.pagination} className='col-md-2'>Navigation</div>
                <div style={this.contentBody} className='col-md-10'>
                    <div style={this.hrzFlow}>
                        <BalanceDashboard/>
                    </div>
                    <div style={this.table}><Transactions/></div>
                </div>
            </div>
        );
    }
}
 
export default PageFinance;