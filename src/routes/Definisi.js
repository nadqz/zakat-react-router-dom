import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Brown from '../components/Brown';
import Blue from '../components/Blue';
import BlackTrans from '../components/BlackTrans';
import Header2 from '../components/Header2';
import DefinitionImage from '../components/DefinitionImage';

const Definisi = () => {
  return (
    <div className='background'>
      <Navbar />
        
        <Header2 heading='Apa itu zakat?' capt='Home'/>
        
        <DefinitionImage/>
        
        <BlackTrans black='Etimologi (Bahasa)'
        black1='Merupakan kata dasar (masdar) zaka yang 
        berarti berkah, tumbuh bersih dan baik, 
        ditinjau dari sudut bahasa , adalah suci, 
        tumbuh, berkah,dan teruji semua digunakan 
        dalam qur’an dan hadis.'
        black2=' Kata dasar zakat berarti bertambah dan tumbuh, 
        sehingga bisa dikatakan, tanaman itu zaka, 
        artinya tumbuh, sedang setiap sesuatu yang 
        bertambah disebut zaka artinya bertambah.'
        black3='Bila suatu tanaman tumbuh tampa cacat, 
        maka kata zakat disini berarti bersih.'/>
        
        <Brown brown='Terminologi' 
        brown1='Zakat sejumlah harta tertentu yang diwajibkan Allah 
                    diserahkan kepada orang-orang yang berhak, 
                    disamping berarti mengeluarkan sejumlah itu sendiri, 
                    jumlah yang dikeluarkan dari kekayaan itu disebut 
                    zakat karena yang dikeluarakan itu menambah banyak, 
                    membuat lebih berarti, dan melindungi kekayaan itu dari kebinasaan.'/>
        
        <Blue blue='Historis-Empiris' 
        Blue1='Ekspektasi bahwa zakat bisa menjadi solusi semua 
        persoalan umat, khususnya dalam memberantas kemiskinan.' 
        blue2='Tujuan zakat bukan hanya memberi makan-minum, konsumtif, 
        tetapi mengubah keadaan simiskin menjadi lebih baik dan 
        bermartabat sesuai kehormatannya sebagai manusia makhluk 
        tertinggi dengan citra ketuhanan yang dipilih oleh Allah 
        swt sebagai pemimpin atau khalifah di muka bumi 
        (QS al-Baqarah (2);30).'/>
        
        <Footer />
    </div>
  )
}

export default Definisi