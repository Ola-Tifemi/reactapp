import { useState } from "react";
const Form = ()=>{
           const [username, setUsername] = useState('');
           const [password, setPassword] = useState('');
           const[data, setData] = useState({
            username:'',
            password: ''
           })
           function handleLogin (){
            if(data.username == '' || data.password == ''){
                alert('All fields are required')
                console.log(data);
                
            }else(
                //process the form:connect with an api and send the data to the endpoint
                alert('Log In Successful')
            )
           }
    return(
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-5">
                    <input type="text" name="username" id="username" className="form-control py-3"
                     value={data.username} onChange={
                        function(e){
                            setData({...data, username:e.target.value});
                        }
                    } />
                </div>
                <div className="col-md-5">
                <input type="password" name="password" id="password" className="form-control py-3"
                     value={data.password} onChange={
                        function(e){
                            setData({...data, password:e.target.value})
                        }
                    } />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={handleLogin}>LogIn</button>
                </div>
            </div>
        </div>
    )
}

export default Form