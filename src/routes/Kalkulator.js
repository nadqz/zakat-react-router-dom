import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import KalkulatorImage from '../components/KalkulatorImage';
import Kalkulasi from '../components/Kalkulasi';
import Brown from '../components/Brown';
import Blue from '../components/Blue';
import Black from '../components/Black';

const Kalkulator = () => {
  return (
    <div className='background'>
      <Navbar />
      <Header heading='Kalkulator Profesi' capt='Home'/>
      <KalkulatorImage />
      <Kalkulasi />
      <Brown brown='Penghasilan / Bulan'
      brown1='Penghasilan per bulan merupakan 
      besar penghasilan atau gaji pokok bersih yang 
      didapatkan dari hasil pekerjaan yang 
      dikerjakan selama satu bulan penuh.'/>
      <Blue blue='Penghasilan Lainnya'
      blue1='Penghasilan lainnya merupakan 
      besar penghasilan yang didapatkan dari pekerjaan 
      atau bisnis atau pendapatan diluar perkerjaan 
      utama, yang dihitung bersih selama sebulan Penuh.'
      blue0="Hutang / Cicilan"
      blue2="Hutang atau cicilan yaitu besar hutang 
      atas peminjaman atau cicilan yang wajib 
      dibayarkan selama satu bulan terhitung dari 
      gaji atau penghasilan pokok, berapa nominal 
      yang terpotong untuk melunasi terhitung selama 
      satu bulan penuh."/>
      <Black blank="Harga Emas Saat Ini"
      blank1="Cari tahu besar nominal harga pasaran 
      emas yang berada dipasaran, ketik besaran 
      harganya dengan tepat dan akurat sesuai 
      dengan tiga angka dari belakang (jangan dibulatkan). 
      Karena Islam teguh, pasti dan adil."/>
      <Footer /> 
    </div>
  );
  }

export default Kalkulator