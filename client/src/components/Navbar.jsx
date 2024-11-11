import React from 'react'
import '../App.css'
import PhoneIcon from '../assets/PhoneIcon.png'
import LocationIcon from '../assets/LocationIcon.png'
import TimeIcon from '../assets/TimeIcon.png'


const Navbar = () => {
  return (
 <>
 
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >
  <span style={{color:'#1F2B6C'}}>Med</span>
  <span style={{color:'rgba(21,158,236,1'}}>dical</span>
    </a>

    <img src={PhoneIcon} className='phoneicon'/>
    <img src={LocationIcon} className='locationicon'/>
    <img src={TimeIcon} className='timeicon'/>
   

  </div>
</nav>
 </>
  )
}

export default Navbar
