import React from 'react'
import "../styles/header.css"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <>
     <div className='nav'>
     <h2><Link to="/" >Home</Link></h2>
     <h2> <Link to="/favorites">Favorites</Link></h2>
      </div>
    
    </>
  )
}

export default Header
