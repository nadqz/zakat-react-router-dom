import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { IoChevronDown } from 'react-icons/io5'
import './NavbarStyle.css'
import Logo from '../assets/zakat.png'
import Dropdown from './Dropdown';
import DropdownKalkulator from './DropdownKalkulator'

const PDF_File_URL = 'http://localhost:3000/Panduan_Zakat.pdf';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdownKal, setDropdownKal] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

    const MouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdownKal(false);
        } else {
          setDropdownKal(true);
        }
      };
    
      const MouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdownKal(false);
        } else {
          setDropdownKal(false);
        }
      };
    
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }


    window.addEventListener('scroll',changeColor)

    function downloadFileAtURL(url) {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    const panduan = () => {
        downloadFileAtURL(PDF_File_URL);
    };
    
  return (
    <nav className={color ? 'header header-bg' : 'header'}>
        <Link to='/'><img src={Logo} className="icon" alt="Logo" /></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Beranda</Link>
            </li>
            <li 
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} >
                <Link to='/zakat' className='nav-links' onClick={closeMobileMenu} style={{display:'inline'}}> Zakat <IoChevronDown style={{display:'inline', position:'relative', marginLeft:'5px'}}/>
                </Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
                <Link className='nav-links' onClick={panduan}>Panduan Zakat</Link>
            </li>
            <li 
            className='nav-item'
            onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}>
                <Link to='/kalkulator' className='nav-links' onClick={closeMobileMenu} style={{display:'inline'}}>Kalkulator <IoChevronDown size={18} style={{display:'inline', position:'relative', marginLeft:'5px'}}/></Link>
                {dropdownKal && <DropdownKalkulator />}
            </li>
            <li className='nav-item'>
                <Link to='/hukum' className='nav-links' onClick={closeMobileMenu}>Hukum Islam</Link>
            </li>
            <li>
                <Link to='/masuk' className='btn-link' onClick={closeMobileMenu}>Masuk</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={25} style={{color: '#ffff'}} />) : (<FaBars size={25} style={{color: '#ffff'}} />)}
        </div>
    </nav>
  )
}

export default Navbar