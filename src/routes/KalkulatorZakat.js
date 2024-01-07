import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlackTrans from '../components/BlackTrans'
import Header from '../components/Header'
import KalkulatorZakatImage from '../components/KalkulatorZakatImage'
import KalkulatorTab from '../components/KalkulatorTab'

const KalkulatorZakat = () => {
  return (
    <div className='background'>
        <Navbar/>
        <Header heading="Kalkulator Zakat" capt="Home"/>
        <KalkulatorZakatImage />
        <BlackTrans black="Kalkulator Zakat"
        black1="Kalkulator Zakat merupakan kalkulator 
        atau alat hitung yang digunakan untuk menghitung 
        zakat sesuai dengan jenis zakay yang sudah ditentukan. 
        Kalkulator menjadikan pekerjaan menghitung lebih mudah, 
        semoga membuat para pembayar zakat berstatus wajib 
        melaksanakan tugasnya dengan benar sebagai hamba 
        Allah Swt. yang taat."/>
        <KalkulatorTab />
        <Footer/>
    </div>
  )
}

export default KalkulatorZakat