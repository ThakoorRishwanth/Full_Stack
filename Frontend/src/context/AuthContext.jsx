import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');

        if(token){
            axios.default.headers.common['Authorization'] = token
        }
    },[]);

    const login = async(username, password)=>{
        try{
            const response = await axios.post('/api/auth/login',{username, password});
            const{token} = response.data;
            localStorage.setItem('token',token);

            axios.defaults.headers.common['Authorization'] = token;
            setUser({username});
            navigate('/');
        }
        catch(err){
            console.log('Login failed', error);
        }
    };

    const logout = ()=>{
        localStorage.removeItem('token');
        delete
        axios.defaults.headers.common['Authorization'];

        setUser(null);
        navigate('/login')
    };

  return (
    <>
    <AuthContext.Provider value={{user, login, logout}}>{children}
    </AuthContext.Provider>
    </>
  )
}

export {AuthContext, AuthProvider}
