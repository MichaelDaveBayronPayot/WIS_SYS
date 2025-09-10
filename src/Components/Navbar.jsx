import React from 'react'
import Routes from '../Routes/Routes'

export const Navbar = () => {
  return (
    <nav>
        <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
    </nav>
  )
}
