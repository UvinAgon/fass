import React, { useState } from 'react';
import {MultiSelectDropdown, CommonDropdown, CategoryDropdown, TypeDropdown } from './popups/multiSelectDropdown';
import { categories , types } from './data';
import AddTransaction from './popups/addTransaction';
import AddTransactionFunc from './popups/addTransactionCopy';
import {ModelPopup} from './popups/modelPopup';
import './popups/popup.css';
import Popup from './popup';

function FiltersFunc(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonExpense, setButtonExpense] = useState(false);

    return (
        // <div className="App">
        //     <main>
        //         <h1>React Popup</h1>
        //         <br /><br />
        //         <button onClick={() => setButtonPopup(true)}>Open Popup</button>
        //     </main>

        //     <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        //         {/* <h1>hello Great</h1> */}
        //         <AddTransactionFunc/>
        //         {/* <AddTransaction/> */}
        //         {/* <h1>hello Lower</h1> */}
        //     </Popup>
        // </div>

        <div style={{display: `flex`, flexDirection: `row`,width: `100%`}}>
            
            <div style={ {paddingLeft: 10, display: `flex`, flexDirection: `row`} } className='col-sm-10'>
                <button style={{ width: '100px'}} className="btn btn-secondary btn-sm"><b>Default</b></button>

                {/* <div><DateRange/></div> */}

                <div style={ {paddingLeft: 20, maxWidth: '250px'}} ><CategoryDropdown/></div>
                <div style={ {paddingLeft: 20, maxWidth: '250px'}} ><TypeDropdown/></div>

            </div>
            
            <div style={ {paddingRight: 10, display: `flex`, flexDirection: `row-reverse`} } className='col-sm-2'>
                <div>
                    <button style={{ width: '100px'}} className="btn btn-success btn-sm" 
                    onClick={() => setButtonPopup(true)}><b>+ Income</b></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                         <AddTransaction typeLabel={"Income"}/>
                         {/* <AddTransactionFunc/> */}
                     </Popup>
                </div>

                <div>
                <button style={{marginRight: 10, width: '100px'}} className="btn btn-danger btn-sm"
                     onClick={() => setButtonExpense(true)}><b>+ Expense</b></button>
                    <Popup trigger={buttonExpense} setTrigger={setButtonExpense}>
                         <AddTransaction typeLabel={"Expense"}/>
                         {/* <AddTransactionFunc/> */}
                     </Popup>
                </div>
            </div>
        </div>
    );
}
 
export default FiltersFunc;