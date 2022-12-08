import React, { Component } from 'react';

class AddTransactionLight extends Component {
    constructor(props){
        super(props);
        this.state = {
            // dates: "",
            date: "",
            amount: "",
            description: "",
            category: "",
            method: "",
            transaction: {
                date: "",
                amount: "",
                description: "",
                category: "",
                method: ""
            }
        }
    }
    handleInputChanged(event){
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            transaction:{
                [name]:value
            }
            // dates: event.target.value,
            // transaction:{
            //     date: event.target.value,
            //     amount: "",
            //     description: "",
            //     category: "",
            //     method: ""
            // }
        })
    }
    handleButtonClicked(){
    const transData = this.state.transaction;
    console.log(transData)
    // alert(transData)
    }
    // handleSubmit(e){
    //     e.preventDefault();
    //     const data = new FormData(e.target)
    //     console.log(Object.fromEntries(data.entries()))
    // }
    render() {
        return (
            <div style={{display: `flex`, flexDirection: `row`, padding:'10px'}}>
                <div style={{backgroundImage: `linear-gradient(135deg,#ffffff 15%,#d0d7e8 65%)`, padding:'10px'}} className='col-md-11'>
                    <div style={{display: `flex`, flexDirection: `row`,height:'50px',padding:7,color:'#000000f8'}}>
                            <label className="form-check-label" style={{paddingRight :'10px'}} >Income</label>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="IncomeExpenseSwitch" />
                            <label className="form-check-label" >Expense</label>
                        </div>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <div className='input-group mb-1'>
                            <input id='trans-date' name='date' type="date" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                                // value={this.state.transaction.date} 
                                // onChange={this.handleInputChanged} 
                                // onChange={this.handleInputChanged.bind(this)} 
                                onChange={(e) => {this.setState.bind({date:e.target.value});
                                // console.console.log(this.state);
                            }} 
                                />
                            <input placeholder='Amount' id='trans-amount' name='amount' type="number" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                                value={this.state.amount}  
                                // onChange={this.handleInputChanged} 
                                onChange={(e) => this.setState.bind({amount:e.target.value})} 
                                />
                        </div>
                        <div className='input-group mb-1'>
                            <input placeholder='Description' id='trans-description' name='description' type="text" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                                // value={this.state.transaction.description} 
                                // onChange={(e)=> this.setState({transaction: {description:e.target.value}})} 
                                />
                        </div>
                        <div className='input-group mb-4'>
                            <input placeholder='Category' id='trans-category' name='category' type="text" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                                // value={this.state.transaction.category} 
                                // onChange={(e)=> this.setState({transaction: {category:e.target.value}})} 
                                />
                            <input placeholder='Method' id='trans-method' name='method' type="text" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                                // value={this.state.transaction.method} 
                                // onChange={(e)=> this.setState({transaction: {method:e.target.value}})} 
                                />
                        </div>

                        <div style={{display: `flex`,flexDirection: `row-reverse`}}>
                            <button style={{ width: '80px',marginLeft:5}} className="btn btn-dark btn-sm"
                                // onClick={(trn) => this.handleSubmit(trn)}
                                onClick={this.handleButtonClicked()}
                                ><b>Save</b></button>
                            {/* <button style={{ width: '80px',marginLeft:5}} className="btn btn-secondary btn-sm" onClick={this.reset}><b>Reset</b></button>
                            <button style={{ width: '80px',marginLeft:5}} className="btn btn-light btn-sm" ><b>+More</b></button> */}
                        </div>
                    </form>
                </div>
                <div style={{backgroundImage: `linear-gradient(45deg,#d0d7e8 80%, #53ff15c3 20%)`,padding:'5px',borderEndEndRadius:15}} className='col-md-1'></div>
            </div>
        );
    }
}

export default AddTransactionLight;