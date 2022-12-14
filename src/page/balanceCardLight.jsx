import React, { useState, useEffect } from 'react';
// import UseDataFetch from './fetchBalance';

const Balance = () =>{

    const [source, setSource] = useState("")
    const [balance, setBalance] = useState(0)
    const [lastTransaction, setLastTransaction] = useState(0)
    const [lastTransactionDate, setLastTransactionDate] = useState("")
    const [userData, setUserData] = useState([]);
    const [error,setError] = useState("")

    // const url = "https://jsonplaceholder.typicode.com/users/1"

    // const updateFinanceData = () => {
    //     const { financeData, error, isLoading } = UseDataFetch(url)

    //     const updateData = () => {
    //         setSource(financeData.username)
    //         setBalance(financeData.address.geo.lng)
    //         setLastTransaction(financeData.address.geo.lat)
    //         setLastTransactionDate(financeData.website)
    //     }
    //     if(isLoading){
    //         // return <div>Loading...</div>
    //         console.log("Loading")
    //     }
    //     if(error){
    //         // return <div>{error}</div>
    //         console.log("Error",{error})
    //     }
    //     else{
    //         updateData()
    //     }
    // }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
         .then((response) => {
            return response.json() 
        }).then((actualData) => {
            setUserData(actualData)
        }).catch((error)=>{
            setError(error)
        })
       }, []);

    const updateFinanceData = () => {
        console.log("userData",userData)
        setSource(userData.username)
        setBalance(userData.address.geo.lng)
        setLastTransaction(userData.address.geo.lat)
        setLastTransactionDate(userData.website)
    }
    
    const cardStyles = {
        backgroundImage: `linear-gradient(135deg,#ffffff 25%,#a0aebc 80%)`,
        borderRadius: 20,
        border: `none`,
        // borderColor: `#1b3d75`,
        // boxShadow: `0 24x 38px 3px rgba(0, 0, 0, 0.025)`,
        margin: 10,
        minWidth: `210px`,
        // width: `230px`
    };

    return (
        <div style={cardStyles} className='card text-center'>
            <div className='card-body' onClick={updateFinanceData}>
                {/* <img style={{zIndex:-1}} src="" alt="" /> */}
                <h3 style={ {fontSize: 25, fontFamily: "fantasy"} }>{ source }</h3>
                <h2 style={ {fontSize: 30} }><b>{ balance.toLocaleString(undefined, { maximumFractionDigits: 2 }) }</b></h2>
                <span style={ {fontSize: 18, fontFamily: "cursive"} }>{ lastTransaction.toLocaleString(undefined, { maximumFractionDigits: 2 }) }</span><br></br>
                <span style={ {fontSize: 12, fontFamily: "cursive"} }>{ lastTransactionDate }</span><br></br>
                {/* <button className="btn btn-secondary btn-sm" onClick={getAPI}>View</button> */}
                <p>{error}</p>
            </div>
            {/* <div>
                {userData.length > 0 && (
                    <ul>
                    {userData.map(user => (
                        <li key={user.id}>{user.email}</li>
                    ))}
                    </ul>
                )}
            </div> */}
        </div>
    );
}
 
export default Balance;