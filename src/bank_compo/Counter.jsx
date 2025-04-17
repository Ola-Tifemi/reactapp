    const Counter = ({accountBalance,deposit,withdraw})=>{
        
        return(
            
            <div>
                <h1>Counter</h1>
                <h4>Your Account Balance is: <strong>{accountBalance}</strong></h4>
                <button className="btn btn-danger" onClick={()=>{withdraw()}}>Withdraw</button>
                <button className="btn btn-success" onClick={deposit}>Deposit</button>
            </div>
        )
    }

    export default Counter