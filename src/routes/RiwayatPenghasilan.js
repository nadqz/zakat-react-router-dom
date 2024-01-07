import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HasilPenghasilan from '../components/HasilPenghasilan'

const RiwayatPenghasilan = () => {
  return (
    <div className='background'>
        <Navbar />
        <HasilPenghasilan />
        <Footer />
    </div>
  )
}

export default RiwayatPenghasilan