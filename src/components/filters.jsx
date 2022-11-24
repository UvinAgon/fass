import React, { Component } from 'react';
import { DateRange } from './dateRange';
import {MultiSelectDropdown, CommonDropdown, CategoryDropdown, TypeDropdown } from './popups/multiSelectDropdown';
import { categories , types } from './data';
import AddTransaction from './popups/addTransaction';
import {ModelPopup} from './popups/modelPopup';

class Filters extends Component {
    state = {  } 
    constructor(){
        super();
        this.state = {
            // open: false,
            // onClose: false,
            openModal: false,
            setOpenModal: false
        }
    }
    render() { 
        return (
            <div style={{display: `flex`, flexDirection: `row`,width: `100%`}}>
                
                <div style={ {paddingLeft: 10, display: `flex`, flexDirection: `row`} } className='col-sm-10'>
                    <button style={{ width: '100px'}} className="btn btn-secondary btn-sm"><b>Default</b></button>

                    {/* <div><DateRange/></div> */}

                    <div style={ {paddingLeft: 20, maxWidth: '250px'}} ><CategoryDropdown/></div>
                    <div style={ {paddingLeft: 20, maxWidth: '250px'}} ><TypeDropdown/></div>

                </div>

                {/* <><div>
                    <button onClick={() => this.state.setOpenModal(true)}>Modaool</button>
                    <ModelPopup open={this.state.openModal} onClose={()=> this.state.setOpenModal(true)}/>
                </div></> */}
                
                <div style={ {paddingRight: 10, display: `flex`, flexDirection: `row-reverse`} } className='col-sm-2'>
                    <div>
                        <button style={{ width: '100px'}} className="btn btn-success btn-sm"
                        // onClick={this.onClose}>
                        // onClick={() => this.state.setOpenModal(true)}
                        >
                            <b>+ Income</b>
                        </button>
                        {/* <ModelPopup open={this.state.openModal} onClose={()=> this.state.setOpenModal(true)}/> */}
                    </div>

                    <div>
                    <button style={{marginRight: 10, width: '100px'}} className="btn btn-danger btn-sm"
                        onClick={() => this.state.setOpenModal(true)}><b>+ Expense</b></button>
                        {/* <AddTransaction trigger={this.openModal} setTrigger={this.setOpenModal}>

                        </AddTransaction> */}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Filters;