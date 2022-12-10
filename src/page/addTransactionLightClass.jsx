import React, { Component } from 'react';

class AddTransactionLight extends Component{
    constructor(props){
        super(props);
        this.state = {
            transaction: {
                type: "Expense",
                date: new Date(),
                amount: "",
                description: "",
                category: "",
                method: ""
            }
        }
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.handleButtonClicked = this.handleButtonClicked.bind(this);
    }

    handleInputChanged(event) {
        this.setState({
            transaction: {
                ...this.state.transaction,
                type:event.target.type === 'checkbox' ? event.target.checked : 'Income',
                [event.target.name]: event.target.value,
            }
        });
    }
    
    handleButtonClicked(event) {
        console.log("submit", this.state.transaction)
        event.preventDefault();
    }

    render() {
        return (
            <div style={{display: `flex`, flexDirection: `row`, padding:'10px'}}>
                <div style={{backgroundImage: `linear-gradient(135deg,#ffffff 15%,#d0d7e8 65%)`, padding:'10px'}} className='col-md-11'>
                    <div style={{display: `flex`, flexDirection: `row`,height:'50px',padding:7,color:'#000000f8'}}>
                            <label className="form-check-label" style={{paddingRight :'10px'}} >Income</label>
                        <div className="form-check form-switch">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="IncomeExpenseSwitch" 
                                name='type'
                                onChange={this.handleInputChanged}/>
                            <label className="form-check-label" >Expense</label>
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
                                value={this.state.transaction.date}  
                                onChange={this.handleInputChanged} 
                            />
                            <input 
                                placeholder='Amount' 
                                id='trans-amount' 
                                name='amount' 
                                type="number" 
                                className='form-control' 
                                aria-label='Small' 
                                aria-describedby='inputGroup-sizing-sm'
                                value={this.state.transaction.amount}  
                                onChange={this.handleInputChanged} 
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
                                value={this.state.transaction.description} 
                                onChange={this.handleInputChanged} 
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
                                value={this.state.transaction.category}  
                                onChange={this.handleInputChanged} 
                            />
                            <input 
                                placeholder='Method' 
                                id='trans-method' 
                                name='method' 
                                type="text" 
                                className='form-control' 
                                aria-label='Small' 
                                aria-describedby='inputGroup-sizing-sm'
                                value={this.state.transaction.method}  
                                onChange={this.handleInputChanged} 
                                />
                        </div>

                        <div style={{display: `flex`,flexDirection: `row-reverse`}}>
                            <button style={{ width: '80px',marginLeft:5}} className="btn btn-dark btn-sm"
                                onClick={this.handleButtonClicked}
                            ><b>Save</b></button>
                        </div>
                    </form>
                </div>
                <div style={{backgroundImage: `linear-gradient(45deg,#d0d7e8 80%, #53ff15c3 20%)`,padding:'5px',borderEndEndRadius:15}} className='col-md-1'></div>
            </div>
        );
    }
}

export default AddTransactionLight;