import React, { Component } from 'react';
import Filters from './filters';
import FiltersFunc from './filtersFunc';
import { transactions } from './data';

class Transactions extends Component {
    state = { 
     } 
    filters={
        width: `100%`,
        height: `40px`,
        // backgroundColor:`#080d15`,
    }
    table={
        display: `flex`, flexDirection: `row`,
        width: `100%`,
        // color: `#fbfbfb`,
        marginTop: `10px`,
        backgroundColor: `#dfe9ec`,
        borderRadius: 10, 
        overflowY: `auto`, overflowX: `hidden`,
        maxHeight: `450px`,
        // position: `fixed`
    }
    render() { 
        return (
            <div style={{padding: `10px`}}>
                <div style={this.filters}><FiltersFunc/></div>
                <div style={this.table}>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col" className='col-sm-1'>Date</th>
                                <th scope="col" className='col-sm-1'>Type</th>
                                <th scope="col" className='col-sm-5'>Description</th>
                                <th scope="col" className='col-sm-1'>Amount</th>
                                <th scope="col" className='col-sm-1'>Method</th>
                                <th scope="col" className='col-sm-2'>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                                {transactions.map((transaction) => (
                                    <tr>
                                    <><td>{transaction.Date}</td>
                                    <td>{transaction.Type}</td>
                                    <td>{transaction.Description}</td>
                                    <td>{transaction.Amount}</td>
                                    <td>{transaction.Method}</td>
                                    <td>{transaction.Category}</td></>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
 
export default Transactions;