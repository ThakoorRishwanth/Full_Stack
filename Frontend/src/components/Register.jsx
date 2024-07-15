import React, { useState } from 'react'
import { api } from '../utils/api';

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[role, setRole] = useState('customer')

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            await api.post('auth/registter',{username, password, role})
        }
        catch(err){
            console.log('Registration failed', err)
        }
    }
  return (
   <>
   <div id="register">

   <form onSubmit={handleSubmit}>
    <h1>Register</h1> 
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' required/>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' reuired/>
       <select value={role} onChange={(e)=>setRole(e.target.value)}>

        <option value='customer'>Customer</option>
        <option value='admin'>Admin</option>

       </select>
       <button type="submit">Register</button>
    </form>
   </div>
   </>
  )
}
