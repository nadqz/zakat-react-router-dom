import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlackTrans from '../components/BlackTrans';
import Brown from '../components/Brown';
import Blue from '../components/Blue';
import Header2 from '../components/Header2';
import PenerimaImage from '../components/PenerimaImage';
import Black from '../components/Black';

const Penerima = () => {
  return (
    <div className='background'>
        <Navbar />
        <Header2 heading='Penerima Zakat' capt='Home'/>
        <PenerimaImage />
        <BlackTrans black="Fakir"
        black1="Fakir adalah kadar kemampuan yang rendah 
        dari seseorang baik dalam bentuk harta maupun 
        kemampuan secara jasmani. Ketidakmampuan ini 
        mengakibatkan seseorang memiliki sangat sedikit 
        harta benda atau bahkan tidak memilikinya sama sekali. 
        Umumnya, fakir digolongkan kepada orang yang tidak 
        memiliki pekerjaan atau usaha. Fakir seringkali 
        disamaartikan dengan miskin, padahal keduanya merujuk 
        pada kondisi yang berbeda. Dibandingkan dengan miskin, 
        fakir merupakan golongan yang lebih membutuhkan pertolongan 
        atau bantuan."/>
        <Brown brown="Miskin"
        brown1="Miskin adalah seseorang yang memiliki rezeki yang 
        cukup untuk memenuhi kebutuhan akan tetapi masih kekurangan. 
        Umumnya, miskin digolongkan kepada orang yang memiliki pekerjaan 
        atau usaha, namun gaji/pendapatannya tidak cukup untuk memenuhi 
        kebutuhan dasarnya. Alasan ketidakcukupan ini biasanya dipengaruhi 
        oleh gaji yang rendah namun memiliki beban finansial yang besar atau 
        keterbatasan seseorang dalam bekerja di pekerjaan yang bergaji cukup. 
        Meskipun tak separah fakir namun kategori miskin adalah yang rentan 
        untuk jatuh pada golongan fakir."/>
        <Blue blue="Amil"
        blue1="Orang-orang yang berpartisipasi dan mengurus proses 
        terselenggaranya Zakat. Amil juga merupakan pihak yang memiliki 
        tanggung jawab atas harta yang diZakatkan, dan bertanggung jawab 
        pada pembagian Zakat. Tanggung jawab besar seorang amil adalah 
        memberikan Zakat harus pada orang yang tepat dan benar-benar membutuhkannya."/>
        <Black blank="Mualaf"
        blank1="Seseorang yang baru masuk Islam dan dimungkinkan mempunyai 
        iman yang masih lemah. Pemberian Zakat kepada para mualaf adalah untuk 
        memantapkan hatinya dan meneguhkan keimanannya, untuk percaya bahwa 
        ia telah menjadi bagian dari Islam dan bahwa Islam adalah agama yang 
        indah, yang akan selalu menolong satu sama lain."/>
        <Black blank="Riqab"
        blank1="Riqab adalah sebutan untuk hamba sahaya atau budak. Istilah 
        ini diperuntukkan bagi orang-orang di zaman dahulu yang dirinya 
        dibeli oleh saudagar-saudagar kaya. Tujuan pemberian Zakat kepada 
        riqab adalah untuk memerdekakannya dari jeratan perbudakan. Golongan 
        ini mungkin saja sudah tidak relevan di zaman sekarang, karena praktik 
        perbudakan sudah dihapuskan."/>
        <Brown brown="Gharim"
        brown1="Gharim adalah golongan orang yang terjerat utang dan tidak 
        mampu membayarnya. Latar belakang utang yang dilakukan oleh gharim ini, 
        umumnya karena tidak mampu memenuhi kebutuhan dasarnya. Dia terpaksa 
        berhutang meskipun tidak sanggup membayarnya karena tidak cukupnya 
        pendapatan atau bahkan tidak ada pendapatan."/>
        <Brown brown="Fisabilillah"
        brown1="Fisabilillah adalah orang-orang yang berjuang di jalan Allah 
        dalam bentuk kegiatan seperti dakwah, jihad dan sebagainya. Di zaman 
        dulu, yang relevan dengan golongan ini adalah orang-orang yang menyebarkan 
        ajaran agama Islam dan rela mati untuk berperang membela agama Allah. 
        Namun dalam konteks sekarang, fisabilillah adalah orang-orang yang 
        memiliki kapabilitas dalam berdakwah baik di pengajian-pengajian atau pondok pesantren."/>
        <Brown brown="Ibnu Sabil"
        brown1="Ibnu Sabil adalah orang yang sedang dalam perjalanan untuk 
        ketaatan kepada Allah dan kehabisan biaya. Golongan ini adalah musafir 
        yang bepergian untuk menempuh hal-hal baik, seperti mencari nafkah atau 
        bepergian untuk berdakwah. Golongan orang-orang ini berkemungkinan untuk 
        kehabisan sumber daya yang dimiliki, sehingga akan sangat terbantu dengan bantuan berupa Zakat."/>
        <Footer />
    </div>
  )
}

export default Penerima