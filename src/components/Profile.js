import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { CiLogout, CiCalculator1, CiUser } from "react-icons/ci";
import { LiaHistorySolid } from "react-icons/lia";
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './ProfileStyle.css';
import { updateUserProfile } from '../firebase/Firebase';

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [editField, setEditField] = useState(null);

  const currentUser = auth.currentUser;

  const [formData, setFormData] = useState({
    username: currentUser?.displayName || '',
    firstName: '',
    backName: '',
    email: currentUser?.email || '',
  });

  useEffect(() => {
    if (currentUser) {
      const [firstName, backName] = currentUser.displayName.split(" ");
      setFormData((prevState) => ({
        ...prevState,
        username: currentUser.displayName,
        firstName: firstName || '',
        backName: backName || '',
        email: currentUser.email || '',
      }));
    }
  }, [currentUser]);

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSave = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: `${formData.firstName} ${formData.backName}`,
      });

      const response = await updateUserProfile({
        username: formData.username,
        firstName: formData.firstName,
        backName: formData.backName,
        email: formData.email,
      });

      if (response.success) {
        toast.success('Profile details updated');
        setChangeDetail(false);
      } else {
        toast.error('Could not update the profile details');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Could not update the profile details');
    }
  };

  const openEditPopup = (field) => {
    setEditField(field);
    setChangeDetail(true);
  };

  const closeEditPopup = () => {
    setEditField(null);
    setChangeDetail(false);
  };

  const renderEditField = () => {
    if (editField === 'username') {
      return (
        <div className='popup-user'>
          <label htmlFor="username">Username Baru:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={onChange}
            placeholder="Masukkan username baru"
          />
        </div>
      );
    } else if (editField === 'firstName') {
      return (
        <div className='popup-user'>
          <label htmlFor="firstName">Nama Depan Baru:</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={onChange}
            placeholder="Masukkan nama depan baru"
          />
        </div>
      );
    } else if (editField === 'backName') {
      return (
        <div className='popup-user'>
          <label htmlFor="backName">Nama Belakang Baru:</label>
          <input
            type="text"
            id="backName"
            value={formData.backName}
            onChange={onChange}
            placeholder="Masukkan nama belakang baru"
          />
        </div>
      );
    } 
    return null;
  };

  return (
    <div className='container'>
      <div className='sidemenu'>
        <ul>
          <h1>Pengaturan Akun</h1>
          <li>
            <Link to='/profil'>
              <CiUser size={25} style={{ marginRight: '1rem' }} />
              Pengaturan Akun
            </Link>
            <Link to='/kalkulatorpenghasilan'>
              <CiCalculator1 size={25} style={{ marginRight: '1rem' }} />
              Kalkulator Penghasilan
            </Link>
          </li>
          <li>
            <Link to='/riwayatpenghasilan'>
              <LiaHistorySolid size={25} style={{ marginRight: '1rem' }} />
              Riwayat Penghasilan
            </Link>
          </li>
          <li>
            <Link to='/kalkulatormaal'>
              <CiCalculator1 size={25} style={{ marginRight: '1rem' }} />
              Kalkulator Maal
            </Link>
          </li>
          <li>
            <Link to='/riwayatmaal'>
              <LiaHistorySolid size={25} style={{ marginRight: '1rem' }} />
              Riwayat Maal
            </Link>
          </li>
          <li>
            <Link to='' onClick={onLogout}>
              <CiLogout size={25} style={{ marginRight: '1rem' }} />
              Keluar
            </Link>
          </li>
        </ul>
      </div>
      <div className='content-penghasilan'>
        <h1>Pengaturan Akun</h1>
        <div className='divider'></div>
        <h2>Akun</h2>
        <div className='divider'></div>
        <div className="penghasilan">
          <div>
            <h3>Username</h3>
            <p>{formData.username}</p>
            <div className="edit-profile">
              <button className='nama' onClick={() => openEditPopup('username')}>
                Edit<FaRegEdit size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
            </div>
          </div>
          <div>
            <h3>Nama Depan</h3>
            <p>{formData.firstName}</p>
            <div className="edit-profile">
              <button className='nama' onClick={() => openEditPopup('firstName')}>
                Edit<FaRegEdit size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
            </div>
          </div>
          <div>
            <h3>Nama Belakang</h3>
            <p>{formData.backName}</p>
            <div className="edit-profile">
              <button className='nama' onClick={() => openEditPopup('backName')}>
                Edit<FaRegEdit size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
            </div>
          </div>
          <div>
            <h3>E-mail</h3>
            <p>{formData.email}</p>
          </div>
        </div>
      </div>
      {changeDetail && (
        <div className="popup-profile">
          <div className="popuppro">
            <h2>Edit Profil</h2>
            {renderEditField()}
            <button className='popup-button' onClick={onSave}>Simpan</button>
            <button className='popup-button' onClick={closeEditPopup}>Kembali</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
