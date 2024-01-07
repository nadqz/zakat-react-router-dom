import React from 'react'
import kalkulator from '../assets/view/penghasilan.png';
import kalkulatormal from '../assets/view/maal.png';
import zakat from '../assets/view/zakat.jpg'
import { Link } from 'react-router-dom';
import './ZakatTabStyle.css'

const KalkulatorTab = () => {
  return (
    <div className='card-kalkulator'>
      <div className="card">
        <div className="card--image">
          <img src={kalkulator} alt="" />
        </div>
        <div className="card--content">
          <p style={{ color: 'rgb(120, 84, 96)', fontWeight: '500' }}>
            Zakat, Rukun Islam Ke-lima, Al Baqarah ayat 434.
          </p>
          <Link to='/kalkulatorpenghasilan' className='card-h1'>Kalkulator Penghasilan</Link>
          <p>
          Mempermudah perhitungan jumlah zakat yang harus 
          ditunaikan oleh setiap umat muslim sesuai ketetapan 
          syariah. Oleh karena itu, bagi Anda yang ingin mengetahui 
          berapa jumlah zakat yang harus ditunaikan, silahkan gunakan 
          fasilitas Kalkulator Zakat Penghasilan ini.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card--image">
          <img src={zakat} alt="" />
        </div>
        <div className="card--content">
          <p style={{ color: 'rgb(120, 84, 96)', fontWeight: '500' }}>
            Zakat, Rukun Islam Ke-lima, Al Baqarah ayat 434.
          </p>
          <Link to='/zakat' className='card-h1'>Zakat</Link>
          <p>
          Peraturan Menteri Agama No. 52 Tahun 2014, Zakat adalah 
          harta yang wajib dikeluarkan oleh seorang muslim atau badan usaha 
          yang dimiliki oleh orang Islam untuk diberikan kepada yang berhak 
          menerimanya sesuai dengan syariat Islam.
          </p>
        </div>
      </div>

      {/* Repeat the same structure for the remaining cards */}
      
      {/* Card 3 */}
      <div className="card">
        <div className="card--image">
          <img src={kalkulatormal} alt="" />
        </div>
        <div className="card--content">
          <p style={{ color: 'rgb(120, 84, 96)', fontWeight: '500' }}>
            Zakat, Rukun Islam Ke-lima, Al Baqarah ayat 434.
          </p>
          <Link to='/kalkulatormaal' className='card-h1'>Kalkulator Maal</Link>
          <p>
          Zakat Harta (Maal) adalah sejumlah harta yang wajib dikeluarkan 
          bila telah mencapai batas minimal tertentu (nisab) dalam kurun 
          waktu (haul) setiap satu tahun kalender.
          </p>
        </div>
      </div>
    </div>
  )
}

export default KalkulatorTab