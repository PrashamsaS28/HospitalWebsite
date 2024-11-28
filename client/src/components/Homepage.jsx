import React from 'react'
import calendar from "../assets/Calendar.png"
import team from "../assets/Team.png"
import cash from "../assets/Cash.png"
import '../App.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import medical from '../assets/medicallls.png'
import homeimg1 from '../assets/homeimg1.png'
import homeimg2 from '../assets/homeimg2.png'
import { IoBandageOutline } from "react-icons/io5";


const Homepage = () => {
  return (
    <div>

<div className=''>
    <button className='button1'>Book an Appointment
     <img src={calendar}className='calendar'></img>
     </button>
     <button className='button2'>Book an Appointment
     <img src={team}className='team'></img>
     </button>
     <button className='button3'>Book an Appointment
     <img src={cash}className='cash'></img>
     </button>
    </div>


    <div className=''>

        <h1 className='heading'>Welcome to Meddical</h1>
        <h1 className='heading1'>A Great Place to Receive Care</h1>


        <h1 className='heading3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</h1>
   <Link to ="/learnmore" className='link1'>Learn more<FaArrowRight className='reacticon' /></Link>
   
   
    </div>


    <img src={medical}className='medical'></img>
    <div className='section1'></div>
      <h1 className='hs1'>Care you can believe in</h1>
      <h1 className='hs2'>Our Services</h1>
      <img src={homeimg1}className='homeimg1'></img>
      <img src={homeimg2}className='homeimg2'></img>

      <h1 className='hs3'>A passion for putting patients first.</h1>
    <div className='sectionn'>
       <ul className='list1'>
        <li>A Passion for Healing</li>
        <li>5-Star Care</li>
        <li>All our best</li>
        <li>Believe in Us</li>
        <li>A Legacy of Excellence</li>
        <li>Always Caring</li>

        
        </ul>
    </div>
    <h1 className='hs4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</h1>
    <h1 className='hs5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</h1>
   
   
    </div>
  )
}

export default Homepage
