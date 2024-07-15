import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div id="Nav">
        <div class="logo">
            <Link to="/"><img src="https://us.123rf.com/450wm/maudis60/maudis601511/maudis60151100213/48037968-vector-sign-book-on-black-background.jpg?ver=6" alt="logo"/></Link>
        </div>
        <div class="list">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/lists'>List of Books</Link></li>
                <li><Link to='/orders'>Orders</Link></li>
            </ul>
        </div>
        <div class="buttons">
            <button><Link to="/login">Login</Link></button>
            <button><Link to="/register">Register</Link></button>
        </div>
    </div>
    </>
  )
}
