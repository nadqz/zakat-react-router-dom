import React from 'react'
import './FooterStyle.css'
import {FaSearchLocation, FaMailBulk, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    const portofolio = () => {
        window.open("https://curriculum-vitae.nadacv.repl.co/");
    };
    const linkedin = () => {
        window.open("www.linkedin.com/in/nadafbalqis");
    };
    const twitter = () => {
        window.open("https://twitter.com/_nadqs");
    };
    const instagram = () => {
        window.open("https://www.instagram.com/_nadqs/");
    };

  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={25} style={{color: '#ffff', marginRight: '2rem'}} />
                <div>
                    <p>Bandung, Jawa Barat.</p>
                    <h4>Indonesia.</h4>
                </div>
                </div>
                <div className='phone'>
                    <h4 style={{cursor:'pointer'}} onClick={portofolio}><TbWorld size={25} style={{color: '#ffff', marginRight: '2rem'}} />My Portofolio</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={25} style={{color: '#ffff', marginRight: '2rem'}} />nadafdhlbalqis@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>"Saya adalah mahasiswi aktif jurusan 
                    Teknik Informatika, Fakultas Sains 
                    dan Teknologi di UIN Sunan Gunung Djati 
                    Bandung. Saya menciptakan website ini 
                    secara individu dengan maksud dan tujuan 
                    meningkatkan inovasi dalam konteks Agama 
                    Islam melalui pemanfaatan teknologi digital 
                    berbasis website." </p>
                    <div className='social'>
                        <h4 style={{cursor:'pointer', position:'relative', display:'inline'}} onClick={instagram}><FaInstagram size={25} style={{color: '#ffff', marginRight: '2rem'}} /></h4>
                        <h4 style={{cursor:'pointer', position:'relative', display:'inline'}} onClick={twitter}><FaTwitter size={25} style={{color: '#ffff', marginRight: '2rem'}} /></h4>
                        <h4 style={{cursor:'pointer', position:'relative', display:'inline'}} onClick={linkedin}><FaLinkedin size={25} style={{color: '#ffff', marginRight: '2rem'}} /></h4>
                    </div>
            </div>
            <div className='cr'>
                
            </div>
        </div>
    </div>
  )
}

export default Footer