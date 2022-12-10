import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';

const AddTransactionLight = () => {

    const [transaction, setTransaction] = useState({
        type:"Expense",
        date: new Date().toISOString().split('T')[0],
        amount: 0,
        description: "",
        category: "",
        method: ""
    });

    const handleInputChanged = (event) => {
        setTransaction(transaction => ({
            ...transaction,
            // type:event.target.type === 'checkbox' ? event.target.checked = "inc"
            [event.target.name]: event.target.value
        }))
    }

    const resetButtonClicked = () => {
        setTransaction(transaction => ({
            ...transaction
        }))
    }
    
    const saveButtonClicked = (event) => {
        console.log("submit", transaction)
        event.preventDefault()
    }

    return (
        <div style={{display: `flex`, flexDirection: `row`, padding:'10px'}}>
            <div style={{backgroundImage: `linear-gradient(135deg,#ffffff 15%,#d0d7e8 65%)`, padding:'10px'}} className='col-md-11'>
                <div style={{display: `flex`, flexDirection: `row`,height:'50px',padding:7,color:'#000000f8'}}>
                        <label className="form-check-label" style={{paddingRight :'10px'}} >Expense</label>
                    <div className="form-check form-switch">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="IncomeExpenseSwitch" 
                            name='type'
                            // checked={transaction.type === 'Income'}
                            // onChange={handleInputChanged}
                            onChange={()=>setTransaction({type:"Income"})}
                            />
                        <label className="form-check-label" >Income</label>
                    </div>
                </div>

                <form>
                    <div className='input-group mb-1'>
                        <input 
                            id='trans-date' 
                            name='date' 
                            type="date" 
                            className='form-control' 
                            aria-label='Small' 
                            aria-describedby='inputGroup-sizing-sm'
                            value={transaction.date}  
                            onChange={handleInputChanged} 
                        />
                        <input 
                            placeholder='Amount' 
                            id='trans-amount' 
                            name='amount' 
                            type="number" 
                            className='form-control' 
                            aria-label='Small' 
                            aria-describedby='inputGroup-sizing-sm'
                            value={transaction.amount}  
                            onChange={handleInputChanged} 
                        />
                    </div>
                    <div className='input-group mb-1'>
                        <input 
                            placeholder='Description' 
                            id='trans-description' 
                            name='description' 
                            type="text" 
                            className='
                            form-control' 
                            aria-label='Small' 
                            aria-describedby='inputGroup-sizing-sm'
                            value={transaction.description} 
                            onChange={handleInputChanged} 
                        />
                    </div>
                    <div className='input-group mb-4'>
                        <input 
                            placeholder='Category' 
                            id='trans-category' 
                            name='category' 
                            type="text" 
                            className='form-control' 
                            aria-label='Small' 
                            aria-describedby='inputGroup-sizing-sm'
                            value={transaction.category}  
                            onChange={handleInputChanged} 
                        />
                        <input 
                            placeholder='Method' 
                            id='trans-method' 
                            name='method' 
                            type="text" 
                            className='form-control' 
                            aria-label='Small' 
                            aria-describedby='inputGroup-sizing-sm'
                            value={transaction.method}  
                            onChange={handleInputChanged} 
                            />
                    </div>

                    <div style={{display: `flex`,flexDirection: `row-reverse`}}>
                        <button style={{ width: '80px',marginLeft:5}} className="btn btn-dark btn-sm"
                            type='submit'
                            onClick={saveButtonClicked}
                        ><b>Save</b></button>
                        <button style={{ width: '80px',marginLeft:5}} className="btn btn-secondary btn-sm" 
                            onClick={resetButtonClicked}
                        ><b>Reset</b></button>
                    </div>
                </form>
            </div>
            <div style={{backgroundImage: `linear-gradient(45deg,#d0d7e8 80%, #53ff15c3 20%)`,padding:'5px',borderEndEndRadius:15}} className='col-md-1'></div>
        </div>
    );
}

export default AddTransactionLight;