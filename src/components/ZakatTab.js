import React from 'react';
import './ZakatTabStyle.css';
import definisi from '../assets/view/definisi.jpg';
import penerima from '../assets/view/penerima.jpg';
import syarat from '../assets/view/syarat.jpg';
import jenis from '../assets/view/jenis.jpg';
import kalkulator from '../assets/view/kalkulator.jpg';
import kalkulatormal from '../assets/view/KalkulatorMal.jpg';
import { Link } from 'react-router-dom';

const ZakatTab = () => {
  return (
    <div className='card-container'>
      <div className="card">
        <div className="card--image">
          <img src={definisi} alt="" />
        </div>
        <div className="card--content">
          <p style={{ color: 'rgb(120, 84, 115)', fontWeight: '500' }}>
            Zakat, Rukun Islam Ke-lima, Al Baqarah ayat 434.
          </p>
          <Link to='/definisi' className='card-h1'>Apa Itu Zakat?</Link>
          <p>
          Peraturan Menteri Agama No. 52 Tahun 2014, Zakat adalah 
          harta yang wajib dikeluarkan oleh seorang muslim atau badan usaha 
          yang dimiliki oleh orang Islam untuk diberikan kepada yang berhak 
          menerimanya sesuai dengan syariat Islam.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card--image">
          <img src={penerima} alt="" />
        </div>
        <div className="card--content">
          <p style={{ color: 'rgb(120, 84, 115)', fontWeight: '500' }}>
            Zakat, Rukun Islam Ke-lima, Al Baqarah ayat 434.
          </p>
          <Link to='/penerima' className='card-h1'>Siapa Penerima Zakat?</Link>
          <p>
          Orang yang menunaikan zakat disebut Muzaki. Sedangkan 
          orang yang menerima zakat disebut MustahikPenerima zakat 
          adalah golongan orang yang berhak menerima zakat. Islam 
          membagi mustahik ke dalam 8 golongan atau asnaf yang 
          telah disebutkan dalam Al-Qur’an Surat At-Taubah ayat 60.
          </p>
        </div>
      </div>

      {/* Repeat the same structure for the remaining cards */}
      
      {/* Card 3 */}
      <div className="card">
        <div className="card--image">
          <img src={syarat} alt="" />
        </div>
        <div className="card--content">
          <p style={{ color: 'rgb(120, 84, 115)', fontWeight: '500' }}>
            Zakat, Rukun Islam Ke-lima, Al Baqarah ayat 434.
          </p>
          <Link to='/syarat' className='card-h1'>Syarat-syarat Zakat</Link>
          <p>
          Zakat bukan hanya memberikan jaminan kepada orang-orang 
          miskin kaum muslimin, namun ia juga bisa disalurkan kepada 
          semua warga negara apa saja yang berada di bawah naungan Islam.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card">
        <div className="card--image">
          <img src={jenis} alt="" />
        </div>
        <div className="card--content">
          <p style={{ color: 'rgb(120, 84, 115)', fontWeight: '500' }}>
            Zakat, Rukun Islam Ke-lima, Al Baqarah ayat 434.
          </p>
          <Link to='/jenis' className='card-h1'>Jenis-jenis Zakat</Link>
          <p>
          Pada dasarnya jenis zakat dibagi menjadi dua yaitu, zakat 
          nafs (jiwa) disebut juga zakat fitrah dan zakat maal (harta).
          </p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="card">
        <div className="card--image">
          <img src={kalkulator} alt="" />
        </div>
        <div className="card--content">
          <p style={{ color: 'rgb(120, 84, 115)', fontWeight: '500' }}>
            Zakat, Rukun Islam Ke-lima, Al Baqarah ayat 434.
          </p>
          <Link to='/kalkulatorpenghasilan' className='card-h1'>Kalkulator Zakat Penghasilan</Link>
          <p>
          Mempermudah perhitungan jumlah zakat yang harus 
          ditunaikan oleh setiap umat muslim sesuai ketetapan 
          syariah. Oleh karena itu, bagi Anda yang ingin mengetahui 
          berapa jumlah zakat yang harus ditunaikan, silahkan gunakan 
          fasilitas Kalkulator Zakat Penghasilan ini.
          </p>
        </div>
      </div>

      {/* Card 6 */}
      <div className="card">
        <div className="card--image">
          <img src={kalkulatormal} alt="" />
        </div>
        <div className="card--content">
          <p style={{ color: 'rgb(120, 84, 115)', fontWeight: '500' }}>
            Zakat, Rukun Islam Ke-lima, Al Baqarah ayat 434.
          </p>
          <Link to='/kalkulatormaal' className='card-h1'>Kalkulator Zakat Maal</Link>
          <p>
          Zakat Harta (Maal) adalah sejumlah harta yang wajib dikeluarkan 
          bila telah mencapai batas minimal tertentu (nisab) dalam kurun 
          waktu (haul) setiap satu tahun kalender.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZakatTab;
