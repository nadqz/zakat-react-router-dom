import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HasilPenghasilanStyle.css';
import { GetAllData, GetDocumentById, DeleteDocumentById } from '../firebase/Functions';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { CiLogout, CiCalculator1, CiUser } from "react-icons/ci";
import { LiaHistorySolid } from "react-icons/lia";

const HasilMaal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllData('zakatMaal');
      setData(result.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);

  const getZakatPenghasilanById = async (id) => {
    try {
      const result = await GetDocumentById('zakatPenghasilan', id);
      return result.data();
    } catch (error) {
      console.error('Error getting document:', error);
      return null;
    }
  };

  const handleEdit = async (id) => {
    try {
      const confirmEdit = window.confirm('Apakah Anda yakin ingin mengedit data ini?');
      if (confirmEdit) {
        const zakatData = await getZakatPenghasilanById(id);
        console.log('Data untuk diedit:', zakatData);
      }
    } catch (error) {
      console.error("Error while fetching data for edit:", error.message);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
      if (confirmDelete) {
        await DeleteDocumentById('zakatPenghasilan', id);
        console.log('Data berhasil dihapus');
      }
    } catch (error) {
      console.error("Error while deleting data:", error.message);
    }
  };

  return (
    <div className='container'>
      <div className='sidemenu'>
        <ul>
            <h1>Riwayat Zakat Penghasilan</h1>
          <li>
            <Link to='/profil'>
              <CiUser size={25} style={{ marginRight: '1rem' }} />
              Pengaturan Akun
            </Link>
            <Link to='/kalkulatorpenghasilan'>
              <CiCalculator1 size={25} style={{marginRight:'1rem'}}/>
              Kalkulator Penghasilan
            </Link>
          </li>
          <li>
            <Link to='/riwayatpenghasilan'>
              <LiaHistorySolid size={25} style={{marginRight:'1rem'}}/>
              Riwayat Penghasilan
            </Link>
          </li>
          <li>
            <Link to='/kalkulatormaal'>
              <CiCalculator1 size={25} style={{marginRight:'1rem'}}/>
              Kalkulator Maal
            </Link>
          </li>
          <li>
            <Link to='/riwayatmaal'>
              <LiaHistorySolid size={25} style={{marginRight:'1rem'}}/>
              Riwayat Maal
            </Link>
          </li>
          <li>
            <Link to=''>
              <CiLogout size={25} style={{marginRight:'1rem'}}/>
              Keluar
            </Link>
          </li>
        </ul>
      </div>
      <div className='content-penghasilan'>
        <h1>Kalkulator Zakat Maal</h1>
        <div className='divider'></div>
          <h2>Hasil Perhitungan Zakat Maal</h2>
          <div className='divider'></div>
          <div className='penghasilan'>
          {data.map((value, index) => (
            <div key={index} className='form-penghasilan'>
              <div className='data-penghasilan-kiri'>
                <p>Tanggal:</p>
                <p>Tabungan/Giro/Deposito/Sejenisnya:</p>
                <p>Emas/Perak/Permata/Sejenisnya:</p>
                <p>Real Estate (tidak termasuk tempat tinggal sekarang):</p>
                <p>Mobil (lebih dari keperluan):</p>
                <p>Harta Bentuk Lainnya:</p>
                <p>Hutang Pribadi/Konsumtif (jatuh tempo):</p>
                <p>Harga Emas Saat Ini (1 Gram):</p>
                <p style={{ fontWeight: 'bold' }}>Total Harta:</p>
                <p style={{ fontWeight: 'bold' }}>Besar Nisab Zakat Maal:</p>
                <p style={{ fontWeight: 'bold' }}>Jumlah Zakat Maal yang Harus Dibayarkan per Tahun:</p>
            </div>
            <div className='data-penghasilan-kanan'>
                <p>{value?.date?.toDate().toLocaleDateString()}</p>
                <p>{value?.tabungan}</p>
                <p>{value?.emas}</p>
                <p>{value?.estate}</p>
                <p>{value?.mobil}</p>
                <p>{value?.lainnya}</p>
                <p>{value?.hutang}</p>
                <p>{value?.hargaEmas}</p>
                <p style={{ fontWeight: 'bold' }}>{value?.total}</p>
                <p style={{ fontWeight: 'bold' }}>{value?.nisab}</p>
                <p style={{ fontWeight: 'bold', color:'green' }}>{value?.result}</p>
            </div>
              <br />
              <div className='button-peng'>
            <button className='button' style={{ display: 'inline-flex' }} onClick={() => handleEdit(value.id)}>
                Hitung Ulang <FaRegEdit size={20} style={{ display: 'inline-flexbox', marginLeft: '0.5rem' }} />
            </button>
            <button className='button' style={{ display: 'inline-flex' }} onClick={() => handleDelete(value.id)}>
                Hapus <MdDeleteOutline size={20} style={{ display: 'inline-flexbox', marginLeft: '0.5rem' }} />
            </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HasilMaal;
