import React from 'react'
import '../App.css'
import PhoneIcon from '../assets/PhoneIcon.png'
import LocationIcon from '../assets/LocationIcon.png'
import TimeIcon from '../assets/TimeIcon.png'
import SearchIcon from '../assets/SearchIcon.png'

const Navbar = () => {
  return (
 <>
 <div>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >
  <span style={{color:'#1F2B6C'}}>Med</span>
  <span style={{color:'rgba(21,158,236,1'}}>dical</span>
    </a>
    <div className='phone'>

    <img src={PhoneIcon} className='phoneicon'/>
<span className='phonetext'>Emergency</span>
<span className='phonetext1'>(237) 681-812-255</span>
    </div>

    <div className='time'>
    <img src={TimeIcon} className='timeicon'/>
    <span className='timetext'>WorK Hour</span>
    <span className='timetext1'>09:00 - 20:00 Everyday</span>
    </div>
   

    <div className='location'>
    <img src={LocationIcon} className='locationicon'/>
    <span className='locationtext'>Location</span>
    <span className='locationtext1'>0123 Some Place</span>
    </div>

   

  </div>
</nav>
</div>

<div className='nav2'>
<nav className="navbar navbar-expand-lg navbar-light">
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
    <ul className="navbar-nav mr-auto">
    <div className='frame1'>
      <li className="nav-item active">
        <a className="nav-linkhome" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-linkabout" href="#">About us</a>
      </li>
      <li className="nav-item">
        <a className="nav-linkservice" href="#">Services</a>
      </li>
      <li className="nav-item">
        
        <a className="nav-linkdoctor" href="#">Doctors</a>
      </li>
      <li className="nav-item">
        <a className="nav-linknews" href="#">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-linkcontact" href="#">Contact</a>
      </li>
      </div>
  
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <img src={SearchIcon} className='searchicon'/>
      <button className="buttonapp" type="submit">Appointment</button>
    </form>
  </div>
</nav>

</div>

 </>
  )
}

export default Navbar
