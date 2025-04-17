  import { useState } from "react"
    const Atm = ({accountBalance,deposit,withdraw})=>{

        const[amount, setAmount] = useState(0)

        function handleDeposit(){
            alert('You Deposited')
        }
        return(
            <div>
                <h1>ATM</h1>
                <h4>Your Account Balance is: <strong>{accountBalance}</strong></h4>
                <input type="number" placeholder="Amount" className="form-control mb-3" value={amount}  
                onChange={(e)=> {setAmount(e.target.value)}}/>
                <button className="btn btn-danger" onClick={()=>{withdraw(Number(amount))}}>Withdraw</button>
                <button className="btn btn-success" onClick={()=>{deposit(Number(amount))}}>Deposit</button>
            </div>
        )
    }

    export default Atm