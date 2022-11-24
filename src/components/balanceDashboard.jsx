import React, { Component } from 'react';
import Balance from './balanceCard';

class balanceDashboard extends Component {
    state = {  } 
    hrzFlow={
        display: `flex`, flexDirection: `row`,
        width: `100%`
    }
    balances={
        display: `flex`, flexDirection: `row`, justifyContent: `center`,
        backgroundImage: `linear-gradient(135deg,#152d54 45%,#548ec9 80%)`
    }
    total={
        backgroundImage: `linear-gradient(135deg,#548ec9 45%,#152d54 85%)`,
        justifyContent: `right`
    }
    render() { 
        return (
            <div style={this.hrzFlow}>
                <div style={this.balances} className='col-md-9'>
                    {/* <button><Balance /></button>
                    <button><Balance /></button>
                    <button><Balance /></button>
                    <button><Balance /></button> */}

                    <Balance /><Balance /><Balance /><Balance />
                    {/* Need to hover and clickable */}
                </div>
                <div style={this.total} className='col-md-3'>
                    <Balance/>
                </div>
            </div>
        );
    }
}
 
export default balanceDashboard;