import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header';
import BlackTrans from '../components/BlackTrans';
import Brown from '../components/Brown';
import Blue from '../components/Blue';
import HukumImage from '../components/HukumImage';

const Hukum = () => {
  return (
    <div className='background'>
    <Navbar />
    <Header heading='Hukum Zakat' capt='Home'/>
    <HukumImage />
    <BlackTrans black='Allah SWT berfirman:' black0='(QS. al-Bayyinah[98]: 5)' 
    black1='وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ ۚ وَذَٰلِكَ دِينُ الْقَيِّمَةِ'
    black2='“Padahal mereka tidak disuruh kecuali 
    supaya menyembah Allah dengan memurnikan ke-taatan 
    kepada-Nya dalam (menjalankan) agama yang lurus, dan 
    supaya mereka mendirikan salat dan menunaikan zakat. 
    Dan yang demikian itulah agama yang lurus.”'/>
    <Brown brown='Rasulullah SAW bersabda:' brown0='(HR. Muslim)'
    brown1='“Islam dibangun di atas lima perkara: bersaksi 
    bahwa tidak ada tuhan kecuali Allah dan Muhammad adalah 
    utusan-Nya; mendirikan salat; melaksanakan puasa 
    (di bulan Ramadan); menunaikan zakat; dan berhaji 
    ke Baitullah (bagi yang mampu).”'/>
    <Blue blue='Zakat adalah Ibadah'
    blue1='Zakat termasuk dalam kategori ibadah wajib 
    (seperti shalat, haji, dan puasa) yang telah diatur 
    berdasarkan Al-Quran dan sunah. Selain itu, zakat 
    juga merupakan amal sosial kemasyarakatan dan 
    kemanusiaan yang dapat berkembang sesuai dengan 
    perkembangan umat manusia.'/>
    <Footer />
    </div>
  )
}

export default Hukum