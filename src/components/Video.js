import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyle.css'

import zakatVideo from '../assets/zakat.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={zakatVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Zakat Calculator</h1>
            <h3>مُحَسِّب الزَّكَاة</h3>
            <p>Zakat Tepat, Berkat Terus Berlipat: Kalkulator Praktis, Kebaikan Terukur!</p>
        <div>
            <Link to='/zakat' className='btn'>Zakat</Link>
            <Link to='/kalkulator' className='btn btn-light'>Kalkulator</Link>
        </div>
    </div>
</div>
  )
}

export default Video