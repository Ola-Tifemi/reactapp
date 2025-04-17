import Atm from "./bank_compo/Atm";
import Counter from "./bank_compo/Counter";
import { useState } from "react";

    const Bank = ()=>{
        // let accountBalance = 1000; dynamic values do not use variable instead use a state
        //accountBalance should be stored as state so it can be changed 
        //useState is used to manage state

            const [accountBalance, setAccountBalance] = useState(1000);

            function deposit(amount){
                if(amount == ''){
                    alert('Please enter deposit amount')
                }else{
                    setAccountBalance(accountBalance + amount);
                }
                
            }
            function  withdraw(amount){
                if(accountBalance > amount){
                    setAccountBalance(accountBalance - amount);
                }else{
                    alert('Insufficient funds')
                }
            }
        
        
        return(
            <div className="container">
                <h1 className="text-warning">PROVIDUS BANK!</h1>
                <h3>Your Account balance is {accountBalance}</h3>
                {accountBalance < 1000? <p className="alert alert-danger">You are going broke </p> :  <p className="alert alert-success">You be odogwu</p>} 
                <br />
                <Atm accountBalance={accountBalance} deposit={deposit} withdraw={withdraw}/>
                <hr />
                <Counter accountBalance={accountBalance} deposit={deposit} withdraw={withdraw}/>
            </div>
        )
    }

    export default Bank