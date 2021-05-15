import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

const style=
{
    textDecoration:"none",
    marginRight:"20px",
    color:" #f0ebeb",
    fontSize:"15px",
    padding:"3px"

}

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
 const handleHover=(event)=>{
    console.log(event);

    event.target.classList.toggle("hover1");
}

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <i className="fas fa-bars fa-1x" onClick={showSidebar}></i>
          </Link>
        <div className="logo">
            <a href="https://www.ssn.edu.in/"><img   src="https://ssnhackandtackle.com/img/ssn1.png" alt="ssn-logo" id="ssn-logo" width="60px"/></a>
            <AiIcons.AiOutlineMinus />
            <a href="https://www.ieee.org/"><img  src="https://ssnhackandtackle.com/img/ieeel.png" alt="ieee-logo" id="ieee-logo" width="65px"/></a>
        </div>
        <ul className="ul-list">
            <li><Link to="/" style={style} >Home</Link></li>
            <li><a href="/#about" style={style} >About</a></li>
            <li><a href="/#track" style={style}>Tracks</a></li>
            <li><a href="/#timeline" style={style}>Timeline</a></li>
            <li><a href="/prize" style={style}>Prizes & Results</a></li>
            <li><a href="/register" style={style}>Wildcard</a></li>
            <li><a href="/#faq" style={style}>FAQs</a></li>
  
            <li><a href="#contact" style={style}>ContactUs</a></li>

        </ul>

             
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
