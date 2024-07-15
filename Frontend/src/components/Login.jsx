import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const{Login} = useContext(AuthContext);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            await Login(username, password)
        }
        catch(err){
            console.log("login failed", err)
        }
    }
  return (
    <>
    <div id="login">

    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' required/>
        <br/>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' reuired/>
        <br/>
        <button type='submit'>Login</button>
    </form>
    </div>
    </>
  )
}
