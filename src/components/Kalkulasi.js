import React, { useState } from 'react';
import numeral from 'numeral';
import './KalkulasiStyle.css';
import niat from '../assets/niat.png';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SendToFirebase } from '../firebase/Functions';

function Kalkulasi() {
  const [penghasilanBulanan, setPenghasilanBulanan] = useState('');
  const [penghasilanLainnya, setPenghasilanLainnya] = useState('');
  const [hutangCicilan, setHutangCicilan] = useState('');
  const [tot, setTot] = useState('');
  const [hargaEmas, setHargaEmas] = useState('');
  const [nisab, setNisab] = useState('');
  const [result, setResult] = useState('');
  const [, setAmount] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [gold, setGold] = useState('');

  function formatToCurrency(value) {
    return `Rp. ${numeral(value).format('0,0')}`;
  }

  function handleClick() {
    const total =
      parseFloat(penghasilanBulanan || 0) +
      parseFloat(penghasilanLainnya || 0) -
      parseFloat(hutangCicilan || 0);
  
    const nisabPenghasilan = (85 / 12) * parseFloat(hargaEmas || 0);
    const amount = 0.025 * total;
  
    setTot(formatToCurrency(total));
    setNisab(formatToCurrency(nisabPenghasilan));
    setAmount(formatToCurrency(amount));
  
    if (isNaN(nisabPenghasilan) || nisabPenghasilan <= 0) {
      setGold('Harga emas harus lebih dari 0.');
      return;
    }

    if (parseFloat(hargaEmas) === 0) {
        setGold('Harga Emas tidak boleh 0');
        return;
    }
  
    if (total >= nisabPenghasilan) {
        setShowPopup(true);
        setResult(`${formatToCurrency(amount)} IDR`);
        setFormdata({
            ...formdate, 
            result: `${formatToCurrency(amount)} IDR`, 
            penghasilanBulanan: formatToCurrency(penghasilanBulanan),
            penghasilanLainnya: formatToCurrency(penghasilanLainnya),
            hutangCicilan: formatToCurrency(hutangCicilan),
            hargaEmas: formatToCurrency(hargaEmas),
            tot: formatToCurrency(total), 
            nisab: formatToCurrency(nisabPenghasilan),
            date: selectedDate,
        });
    } else {
        setShowPopup(true);
        setResult('Penghasilan Anda belum mencapai Nisab untuk Zakat Penghasilan.');
        setFormdata({
            ...formdate, 
            result: 'Penghasilan Anda belum mencapai Nisab untuk Zakat Penghasilan.',
            penghasilanBulanan: formatToCurrency(penghasilanBulanan),
            penghasilanLainnya: formatToCurrency(penghasilanLainnya),
            hutangCicilan: formatToCurrency(hutangCicilan),
            hargaEmas: formatToCurrency(hargaEmas),
            tot: formatToCurrency(total), 
            nisab: formatToCurrency(nisabPenghasilan),
            date: selectedDate,
        });
    }

    if (editData) {
        const updatedData = {
          ...editData,
          penghasilanBulanan,
          penghasilanLainnya,
          hutangCicilan,
          hargaEmas,
          tot,
          nisab,
          result,
          date: selectedDate,
        };
    
        const updatedDataArray = [...data];
        updatedDataArray[data.indexOf(editData)] = updatedData;
        setData(updatedDataArray);
        setEditData(null);
      }
  }

  const [formdate, setFormdata] = useState({
    penghasilanBulanan: "",
    penghasilanLainnya: "",
    hutangCicilan: "",
    tot: "",
    hargaEmas: "",
    nisab: "",
    result: "",
    date: "",
  });
  

  function onResult() {
    SendToFirebase("zakatPenghasilan", formdate)
    .then((res) => {
        console.log("Send To Firebase: ", res);
    })
    .catch((error) => console.log(error))
  }


  return (
    <div className='kalkulator'>
        <div className='kalkulator-container'>
            <div className='kalkulator-left'>
                <h1>Zakat Penghasilan</h1>
                <h2>Niat</h2>
                <img src={niat} alt='niat' style={{height:'auto', width:'100%'}}/>
                <h3>"Nawaitu an ukhrija zakatadz maali fardhan lillahi ta’ala."</h3>
                <p>"Artinya: Aku niat mengeluarkan zakat hartaku fardhu karena Allah Ta'ala."</p>
            </div>
            <div className='kalkulator-right'>
                <label>Penghasilan / Bulan (IDR): </label>
                <div class="input-group mb-3">
                    <input
                        className='form-control'
                        type="text"
                        value={formatToCurrency(penghasilanBulanan)}
                        onChange={(event) =>
                        {
                            setPenghasilanBulanan(event.target.value.replace(/\D/g, ''));
                            setFormdata({...formdate, penghasilanBulanan: event.target.value});
                        }} style={{backgroundColor:'rgba(255,255,255,.1)'}}>
                    </input>
                </div>
                <label>Penghasilan Lainnya / Bulan (IDR): </label>
                <div class="input-group mb-3">
                    <input
                        className='form-control'
                        type="text"
                        value={formatToCurrency(penghasilanLainnya)}
                        onChange={(event) =>
                        {
                            setPenghasilanLainnya(event.target.value.replace(/\D/g, ''));
                            setFormdata({...formdate, penghasilanLainnya: event.target.value});
                        }} style={{backgroundColor:'rgba(255,255,255,.1)'}}>
                    </input>
                </div>
                <label>Hutang atau Cicilan / Bulan (IDR): </label>
                <div class="input-group mb-3">
                    <input
                        className='form-control'
                        type="text"
                        value={formatToCurrency(hutangCicilan)}
                        onChange={(event) =>
                        {
                            setHutangCicilan(event.target.value.replace(/\D/g, ''));
                            setFormdata({...formdate, hutangCicilan: event.target.value});
                        }} style={{backgroundColor:'rgba(255,255,255,.1)'}}>
                    </input>
                </div>
                <label>Jumlah Penghasilan / Bulan (IDR): </label>
                <div class="input-group mb-3">
                    <input
                        className='form-control'
                        type="text"
                        value={tot} disabled style={{color:'rgba(0, 0, 0, 0.9)', backgroundColor:'rgb(255, 255, 255, .7)'}}/>
                </div>
                <label>Harga Emas Saat Ini / Gram (IDR): </label>
                <div class="input-group mb-3">
                    <input
                        className='form-control'
                        type="text"
                        value={formatToCurrency(hargaEmas)}
                        onChange={(event) =>
                        {
                            setHargaEmas(event.target.value.replace(/\D/g, ''));
                            setFormdata({...formdate, hargaEmas: event.target.value});
                        }} style={{backgroundColor:'rgba(255,255,255,.1)'}}>
                    </input>
                    {gold !== '' && <p style={{ color: 'red' }}>{gold}</p>}
                </div>
                <label>Besar Nisab / Bulan (IDR): </label>
                <div class="input-group mb-3">
                    <input
                        className='form-control'
                        type="text"
                        value={nisab} disabled style={{color:'rgba(0, 0, 0, .9)', backgroundColor:'rgba(255, 255, 255, .7)'}} />
                </div>
                <label>Tanggal:</label>
                <div className="input-group mb-3">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                            setFormdata({...formdate, date: (date)});
                            setSelectedDate(date);
                        }}
                        dateFormat="yyyy-MM-dd"
                        className="date-control"
                        placeholderText='YYYY-MM-DD'
                    />
                </div>
                <button className='button' onClick={handleClick}>Hitung Zakat</button>
                {showPopup && (
                <div className="popup">
                    <div className='popup-zakat'>
                        <p>Jumlah zakat penghasilan yang harus Anda bayarkan setiap bulan sebesar:</p>
                        <h3>{result}</h3>
                        <Link 
                        to='/riwayatpenghasilan'
                        className='popup-button'
                        onClick={onResult}>Simpan</Link>
                        <button 
                        className='popup-button'
                        onClick={() => setShowPopup(false)}>Tutup</button>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Kalkulasi