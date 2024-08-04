import React, {useRef} from 'react'
import './Navbar.css'
import open_menu from '../../assets/open_menu.png'
import close_menu from '../../assets/close_menu.png'

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <a className='logo'><span className='logo-letter'>S</span>ha<span className='logo-letter'>D</span>a</a>
      <img src={open_menu} onClick={openMenu} alt="open_menu" className='nav-mob-open'/>
      <ul ref={menuRef} className="navbar-menu">
        <img src={close_menu} onClick={closeMenu} alt="close_menu" className='nav-mob-close' />
        <li><a className='anchor-link' href='#home'><p>Home</p></a></li>
        <li><a className='anchor-link' href='#about'><p>About Me</p></a></li>
        {/* <li><a className='anchor-link' href='#services'><p>Services</p></a></li> */}
        <li><a className='anchor-link' href='#work'><p>Portfolio</p></a></li>
        <li><a className='anchor-link' href='#contact'><p>Contact</p></a></li>
      </ul>
      <div className="nav-connect"><a className='anchor-link' href='#contact'>Connect With Me</a></div>

    </div>
  )
}

export default Navbar