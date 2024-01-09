import React from 'react'
import './Navigation.css'
import logo from '../assets/images/nike-logo-49323.png'

function Navigation() {
    return (
        <div className='container'>

            <nav>

                <div className='logo'>
     <img src={logo} alt={logo} width={76} height={42}/>
                </div>

                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>


                <button>Login</button>
            </nav>

        </div>
    )
}

export default Navigation