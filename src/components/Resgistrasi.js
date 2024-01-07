import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookSquare } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import './RegistrasiStyle.css'
import { Link } from 'react-router-dom';
import Logo from '../assets/zakat.png'
import { GoogleAuth, GithubAuth, FacebookAuth } from '../firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { db } from "../firebase/init";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Resgistrasi() {

    const [formData, setFormData] = useState({
        username:'',
        firstName: "",
        backName:'',
        email: "",
        password: "",
    });

    const { username, firstName, backName, email, password } = formData;
    const navigate = useNavigate();
    function onChange(e) {
        setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
        }));
    }

    async function onSubmit(e) {
        e.preventDefault();
      
        try {
          const auth = getAuth();
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
      
          const user = userCredential.user;
      
          await updateProfile(user, {
            displayName: username,
          });
      
          const formDataCopy = { ...formData };
          delete formDataCopy.password;
          formDataCopy.timestamp = serverTimestamp();
      
          await setDoc(doc(db, "users", user.uid), formDataCopy);
          toast.success("Registrasi berhasil");
          navigate("/");
        } catch (error) {
          toast.error("Terjadi kesalahan pada registrasi");
        }
      }

    async function googleLogIn() {
        const userAuth = await GoogleAuth();
        console.log("Google Auth: ", userAuth);
    };

    async function GithubLogIn() {
      const userAuth = await GithubAuth();
      console.log("Github user: ", userAuth);
    }

    async function FbLogIn() {
      const userAuth = await FacebookAuth();
      console.log("Facebook user: ", userAuth);
    }

    return (
        <div className='bg-regis'>
            <Link to='/'><img src={Logo} className="logo" alt="Logo" /></Link>
    <div className='regis'>
        <div className='wrapgis'>
            <div className='regisLeft'>
            <h1>Buat Akun Kalkulator Zakat</h1>
                <div className='regisButton'
                onClick={googleLogIn}>
                    <p><FcGoogle size={20} style={{marginRight: '1rem'}}/>Masuk Menggunakan Google</p>
                </div>
                <div className='regisButton'
                onClick={GithubLogIn}>
                    <p><FaGithub size={20} style={{color: '#ffff', marginRight: '1rem'}} /> Masuk Menggunakan GitHub</p>
                </div>
                <div className='regisButton'
                onClick={FbLogIn}>
                    <p><FaFacebookSquare size={20} style={{color: '#ffff', marginRight: '1rem'}} /> Masuk Menggunakan Facebook</p>
                </div>
                <div className='deskgis'>
                <p>Coba masuk menggunakan akun yang tersedia di atas jika kamu memiliki akunnya.</p>
                <p>Sudah memiliki akun?<Link to='/masuk' className='linkto'> Masuk</Link></p>
                </div>
            </div>
            <div className='regisRight'>
                <form className='regis-group' onSubmit={onSubmit} >
                <input 
                className='input-regis' 
                type='text' 
                placeholder='Masukkan username'
                id='username'
                value={username} 
                required
                autoComplete={false}
                onChange={onChange}
                />
                <input 
                className='input-regis' 
                type='text' 
                placeholder='Masukkan nama depan'
                id='firstName'
                value={firstName} 
                required
                autoComplete={false}
                onChange={onChange}
                />
                <input 
                className='input-regis' 
                type='text' 
                placeholder='Masukkan nama belakang'
                id='backName'
                value={backName} 
                required
                autoComplete={false}
                onChange={onChange}
                />
                <input 
                className='input-regis' 
                type="email"
                id='email'
                placeholder="Masukkan email" 
                value={email}
                onChange={onChange} 
                required
                autoComplete={false}
                />
                <input 
                className='input-regis' 
                type="password"
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Masukkan password" 
                required
                autoComplete={false}
                />
                <button
                type="submit"  
                className='submit'
                
                >Daftar<TbLogin2 size={25} style={{color: '#ffff', marginLeft: '1rem'}} /></button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
};