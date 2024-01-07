import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlackTrans from '../components/BlackTrans'
import ZakatImage from '../components/ZakatImage'
import ZakatTab from '../components/ZakatTab'
import Black from '../components/Black'
import Footer from '../components/Footer'

const Zakat = () => {
  return (
    <div className='background'>
        <Navbar />
        <Header heading="Zakat" capt="Home"/>
        <ZakatImage />
        <BlackTrans black="Surat At-Taubah Ayat 34"
        black1="يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّ كَثِيرًا مِنَ الْأَحْبَارِ وَالرُّهْبَانِ لَيَأْكُلُونَ أَمْوَالَ النَّاسِ بِالْبَاطِلِ وَيَصُدُّونَ عَنْ سَبِيلِ اللَّهِ ۗ وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ وَلَا يُنْفِقُونَهَا فِي سَبِيلِ اللَّهِ فَبَشِّرْهُمْ بِعَذَابٍ أَلِيمٍ"
        black2='"Hai orang-orang yang beriman, sesungguhnya sebahagian besar dari orang-orang alim Yahudi dan rahib-rahib Nasrani benar-benar memakan harta orang dengan jalan batil dan mereka menghalang-halangi (manusia) dari jalan Allah. Dan orang-orang yang menyimpan emas dan perak dan tidak menafkahkannya pada jalan Allah, maka beritahukanlah kepada mereka, (bahwa mereka akan mendapat) siksa yang pedih."'/>
        <ZakatTab />
        <Black blank="Surat At-Taubah Ayat 71"
        blank1="وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ ۚ يَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِ وَيُقِيمُونَ الصَّلَاةَ وَيُؤْتُونَ الزَّكَاةَ وَيُطِيعُونَ اللَّهَ وَرَسُولَهُ ۚ أُولَٰئِكَ سَيَرْحَمُهُمُ اللَّهُ ۗ إِنَّ اللَّهَ عَزِيزٌ حَكِيمٌ"
        blank2="Dan orang-orang yang beriman, lelaki dan perempuan, sebahagian mereka (adalah) menjadi penolong bagi sebahagian yang lain. Mereka menyuruh (mengerjakan) yang ma'ruf, mencegah dari yang munkar, mendirikan shalat, menunaikan zakat dan mereka taat pada Allah dan Rasul-Nya. Mereka itu akan diberi rahmat oleh Allah; sesungguhnya Allah Maha Perkasa lagi Maha Bijaksana."/>
        <Footer />
    </div>
  )
}

export default Zakat