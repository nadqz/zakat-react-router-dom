import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import Brown from '../components/Brown'
import BlackTrans from '../components/BlackTrans'
import Blue from '../components/Blue'
import JenisImage from '../components/JenisImage'

const Jenis = () => {
  return (
    <div className='background'>
        <Navbar />
        <Header2 heading="Jenis-jenis Zakat" capt="Home"/>
        <JenisImage />
        <BlackTrans black="Zakat Fitrah" black0="Hukum zakat fitrah"
        black1="Makna Zakat Fitrah yaitu zakat yang diwajibkannya 
        terkait dengan puasa pada bulan Ramadhan, 
        disebut pula dengan sedekah fitrah. Sedekah 
        menurut syara', dipergunakan untuk zakat yang 
        diwajibkan; sebagaimana terdapat pada berbagai 
        tempat dalam ai-Qur'an dan Sunnah. Dipergunakan pula sedekah itu untuk zakat fitrah, 
        seolah-olah sedekah dan fitrah satu asal kejadian, 
        sehingga wajibnya zakat fitrah untuk mensucikan 
        diri dan membersihkan perbuatannya."
        black2='Dari lbnu Umar, Rasulullah Saw bersabda 
        "Sesungguhnya Rasulullah Saw telah mewajibkan zakat fitrah pada bulan Ramadhan satu sha 
        kurma atau satu sha gandum kepada setiap orang yang 
        merdeka, hamba sahaya laki-laki maupun perempuan dari kaum muslim."'/>
        <Brown brown="Zakat Maal (Harta)"
        brown1="Zakat maal atau harta adalah segala sesuatu yang 
        diinginkan oleh manusia untuk dimiliki, dimanfaatkan dan 
        juga disimpan. Sesuatu inilah yang perlu dikeluarkan 
        zakatnya jika sudah memenuhi syarat dan rukunnya."/>
        <Blue blue="Zakat Profesi"
        blue1="Pekerjaan yang menghasilkan uang ada dua 
        macam. Pertama pekerjaan yang dikerjakan sendiri 
        tanpa tergantung kepada orang lain. Kedua pekerjaan 
        yang dikerjakan pihak lain1 baik pemerintah/ 
        perusahaan1 maupun perorangan dengan memperoleh 
        upah pencarian dari profesi yang dimiliki seseorang. 
        Wajibkah kedua macam penghasilan yang berkembang 
        sekarang 1n1 dikeluarkan zakatnya? Bila wajib/ 
        berapakah nisabnya1 besar zakatnya1 dan bagaimana 
        tinjauan fikih Islam tentang masalah itu? Pertanyaan 
        tersebut perlu sekali memperoleh jawaban pada masa 
        sekarang/ supaya setiap orang mengetahui kewajiban dan haknya. Bentuk-bentuk penghasilan dengan 
        bentuknya yang modern, volumenya yang besar, dan 
        sumbernya yang luas, merupakan sesuatu yang belum 
        di kenai oleh para ulama fikih pada masa silam."/>
        <Footer />
    </div>
  )
}

export default Jenis