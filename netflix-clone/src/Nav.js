import React, { useEffect, useState } from 'react'
import "./CSS/Nav.css"

const Nav = () => {
  const [show, handeShow] = useState(false);
  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handeShow(true);

    }else {
      handeShow(false);

    }
}
useEffect(()=> {
  window.addEventListener("scroll", transitionNavBar);
  return () => window.removeEventListener("scroll", transitionNavBar);

 }, [])
  return (
    <div className={`nav ${show &&'nav_black'}`}>
      <div className='nav_contents'>
        <img
        className='nav_logo'
        src='https://loodibee.com/wp-content/uploads/Netflix-logo.png'
        alt=''/>

        <img
        className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt=''/>
      </div>    
    </div>
  )
}

export default Nav
