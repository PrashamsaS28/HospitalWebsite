import React from 'react'
import elipse1 from '../assets/Ellipse 1.png'
import elipse2 from '../assets/Ellipse 2.png'
import bg from '../assets/bg.png'

const Top = () => {
  return (
    
    <div className='imagee'>
     <img src={elipse1}className='bg'></img>
     <img src={elipse2}className='bg2'></img>
      <img src={bg}className='bg1'></img>
      <h1 className='text'>Caring for Life</h1>
      <h1 className='text1'>Leading the Way
      in Medical Excellence</h1>
      <button className='topbutton'>Our Services</button>
 
    </div>
  )
}

export default Top
