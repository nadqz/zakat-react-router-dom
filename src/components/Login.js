import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { TbLogin2 } from 'react-icons/tb';
import './LoginStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/zakat.png';
import { GoogleAuth, GithubAuth, FacebookAuth, LoginUser } from '../firebase/Firebase';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await LoginUser(email, password);
        if (userCredential.user) {
            navigate('/');
        }
    } catch (error) {
        toast.error('Email dan password salah');
    }
};

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
    <div className="bg-login">
      <Link to="/">
        <img src={Logo} className="logo" alt="Logo" />
      </Link>
      <div className="login">
        <div className="wrapper">
          <div className="loginLeft">
            <h1>Masuk ke Akun Kalkulator Zakat</h1>
            <button className="loginButton" onClick={googleLogIn}>
              <FcGoogle size={20} style={{ marginRight: '1rem' }} />Masuk Menggunakan Google
            </button>
            <button className="loginButton" onClick={GithubLogIn}>
              <FaGithub size={20} style={{ color: '#ffff', marginRight: '1rem' }} /> Masuk Menggunakan GitHub
            </button>
            <button className="loginButton" onClick={FbLogIn}>
              <FaFacebookSquare size={20} style={{ color: '#ffff', marginRight: '1rem' }} /> Masuk Menggunakan Facebook
            </button>
            <div className="desklog">
              <p>Coba masuk menggunakan akun yang tersedia di atas jika kamu memiliki akunnya.</p>
              <p>
                Belum memiliki akun?<Link to="/registrasi" className="linkto">
                  {' '}
                  Registrasi
                </Link>
              </p>
            </div>
            <form className="login-group" onSubmit={onSubmit}>
              <input
                className="input-login"
                type="email"
                placeholder="Masukkan Email"
                id='email'
                value={email}
                onChange={onChange}
              />
              <input
                className="input-login"
                id='password'
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={onChange}
              />
              <button className="submit" type="submit">
                Masuk<TbLogin2 size={25} style={{ color: '#ffff', marginLeft: '1rem' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
