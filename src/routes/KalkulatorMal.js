import React from 'react'
import KalkulasiMal from '../components/KalkulasiMal'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Brown from '../components/Brown'
import Blue from '../components/Blue'
import Header3 from '../components/Header3'
import MalImage from '../components/MalImage'
import Black from '../components/Black'

const KalkulatorMaal = () => {
  return (
    <div className='background'>
        <Navbar/>
        <Header3 heading="Kalkulator Maal"/>
        <MalImage />
        <KalkulasiMal/>
        <Blue blue="Tabungan/Giro/Deposito/Sejenisnya"
        blue1="Merupakan nominal atau jumlah tabungan 
        baik yang tersimpan didalam tabungan, tidak terikat 
        tabungan mana pun, atau giro, atau berupa deposit harta. 
        Masukkan jumlahnya sesuai dengan yang semestinya agar 
        perhitungan tidak keliru dan adil."/>
        <Black blank="Emas/Perak/Permata/Sejenisnya"
        blank1="Merupakan nominal atau jumlah perhiasan yang 
        dimiliki baik berupa emas, perak, atau pun permata yang 
        sudah pasti dimiliki dan bukan milik orang lain. 
        Masukkan jumlah atau nominalnya sesuai dengan harga 
        beli saat melakukan transaksi atau sesuai dengan hasil 
        bukti pembelian saat melakukan transaksi"/>
        <Blue blue="Saham/Surat Berharga/Sejenisnya"
        blue1="Merupakan harta dalam bentuk data, dimana ketika data akan dijual 
        mendapatkan harga jual sekian yang mampu terjual. Masukkan nominal atau 
        jumlahnya sesuai dengan harga jualnya baik dalam bentuk saham atau surat 
        berharga bagaimana pun."/>
        <Brown brown="Real Estate (tidak termasuk tempat tinggal sekarang)"
        brown1="Adalah Real estate yang dimiliki namun yang bukan dijadikan 
        tempat tinggal, seperi yang disewakan, dikontrakkan, atau dijual. 
        Masukkan nominal harga jualnya sesuai dengan harga mampu terjualnya."/>
        <Black blank="Mobil(lebih dari keperluan)"
        blank1="kendaraan yang masuk kedalam perhitungan zakat 
        maal atau zakat harta ini merupakan kendaraan 4 atau 
        berupa mobil, namun yang perlu diperhatikan adalah mobil 
        yang melebihi dari keperluan seperti koleksi atau memiliki 
        lebih daripada 1 namun yang terpakai hanya 1 dan seterusnya. 
        Masukkan nominal harga beli ketika melakukan transaksi pembelian 
        mobilnya."/>
        <Footer/>
    </div>
  )
}

export default KalkulatorMaal