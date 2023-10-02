import React from 'react'
import './Top.css'
import { Link } from '@mui/material'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillLock}

export default function Top() {
  const linkStyles = {
    textDecoration: "none",
    textAlign:'center',
    alignItems:'center',
    // padding:'10px'
  };
  return (
    <div className='container'>
      <div className='top'>
        <div className='hamburger'><GiHamburgerMenu size={30} /></div>
        <Link style={linkStyles}>Logout</Link>
        <Link style={linkStyles}>Lock</Link>
        
      </div>
      <div>
        <div>
            <h2>Orders</h2>
        </div>
        <div>
            <Link >Home</Link>
            <Link >Transactions</Link>
            <Link >Orders</Link>
        </div>
      </div>
    </div>
  )
}
