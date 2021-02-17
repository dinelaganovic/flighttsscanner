import React from 'react'
import {Link} from 'react-router-dom'
import  './all.css'
 function Nav({setIsLogin}) {

    const logoutSubmit = () =>{
        localStorage.clear()
        setIsLogin(false)
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/"> <i class="fas fa-id-card-alt"></i>Profile</Link></h1>
            </div>
            <ul>
                <li><Link to="/">Reminders</Link></li>
                <li><Link to="/create">Create Reminder</Link></li>
                <li onClick={logoutSubmit}><Link to="/">Logout</Link></li>
            </ul>
        </header>
    )
}export default Nav;
