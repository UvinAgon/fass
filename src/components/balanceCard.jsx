import React, { Component } from 'react';
// useState
class Balance extends Component {
    state = { 
        source: "HSBC",
        balance: "1,209,250.27",
        lastTransaction: "-1,128.74",
        lastTransactionDate: "2022-09-29"
    } 
    
    card = {
        backgroundImage: `linear-gradient(135deg,#1b3d75 45%,#5b91c6 80%)`,
        borderRadius: 20,
        border: `none`,
        // borderColor: `#1b3d75`,
        // boxShadow: `0 24x 38px 3px rgba(0, 0, 0, 0.025)`,
        margin: 10,
        minWidth: `210px`,
        // width: `230px`
    };

    render() { 
        return (
            <div style={this.card} className='card text-center'>
                <div className='card-body'>
                    {/* <img style={{zIndex:-1}} src="" alt="" /> */}
                    <h3 style={ {fontSize: 25, fontFamily: "fantasy"} }>{ this.state.source }</h3>
                    <h2 style={ {fontSize: 30} }><b>{ this.state.balance }</b></h2>
                    <span style={ {fontSize: 18, fontFamily: "cursive"} }>{ this.state.lastTransaction }</span><br></br>
                    <span style={ {fontSize: 12, fontFamily: "cursive"} }>{ this.state.lastTransactionDate }</span>
                    {/* <button className="btn btn-secondary btn-sm">View</button> */}
                </div>
            </div>
        );
    }

    // balanceCard() {
    //     const [ features ] = useState([     
        // source: ["Cash","HSBC","People's","Sampath"],
        // balance: [5219,209250.27,21000.91,80249.78]
    //     ])
    // }
}
 
export default Balance;