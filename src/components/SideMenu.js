import React from 'react'
import './SideMenuStyle.css'
import { Link } from 'react-router-dom'
import { CiLogout, CiCalculator1 } from "react-icons/ci";
import { LiaHistorySolid } from "react-icons/lia";

const SideMenu = () => {
  return (
    <div className='carousel'>
        <ul className='carousel-menu'>
            <li className='carousel-link'>
                <Link to='/kalkulatorpenghasilan' style={{display:'inline-flex'}}><CiCalculator1 size={25} style={{display:'inline', marginRight:'2rem'}}/>Kalkulator Penghasilan</Link>
            </li>
            <li className='carousel-link'>
                <Link to='/riwayatpenghasilan' style={{display:'inline-flex'}}><LiaHistorySolid size={25} style={{display:'inline', marginRight:'2rem'}}/>Riwayat Penghasilan</Link>
            </li>
            <li className='carousel-link'>
                <Link to='/kalkulatormaal' style={{display:'inline-flex'}}><CiCalculator1 size={25} style={{display:'inline', marginRight:'2rem'}}/>Kalkulator Maal</Link>
            </li>
            <li className='carousel-link'>
                <Link to='/riwayatmaal' style={{display:'inline-flex'}}><LiaHistorySolid size={25} style={{display:'inline', marginRight:'2rem'}}/>Riwayat Maal</Link>
            </li>
            <li className='carousel-link'>
                <Link to='' style={{display:'inline-flex'}}><CiLogout size={25} style={{display:'inline', marginRight:'2rem'}}/>Keluar</Link>
             </li>
        </ul>
    </div>
  )
}

export default SideMenu