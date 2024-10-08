import React, { useState } from "react";
import './navBar.css'
import contactImg from '../../assets/contact.png';
import { Link } from "react-scroll";
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="dekstopmenu">
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" > Home</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About </Link>
        <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">project </Link>
        <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients </Link>

      </div>

      <button className="dekstopmenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="" className="dekstopmenuImg" />Contact Me</button>


      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navmenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)} > Home </Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}> About</Link>
        <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>project </Link>
        <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Clients </Link>
        <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>contact </Link>
      </div>
    </nav>
  )
}
export default Navbar;
