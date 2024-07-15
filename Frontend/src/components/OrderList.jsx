import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { api } from '../utils/api';

export const OrderList = () => {
    const[orders, setOrders] = useState([]);
    const{user} = useContext(AuthContext);

    useEffect(()=>{
        const fetchOrders = async()=>{
            const response = await api.get(`/users/${user.id}/orders`);
        }
        fetchOrders();
    },[user])
  return (
    <div id="orders">
        <h1>Orders</h1>
        <ul>
            {orders.map(order=>(
                <li key={order.id}>(order.orderDate)</li>
            ))}
        </ul>
    </div>
  )
}
