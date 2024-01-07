import React, { useState } from 'react';
import numeral from 'numeral';
import './KalkulasiStyle.css';
import niat from '../assets/niat.png';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SendToFirebase } from '../firebase/Functions';

const KalkulasiMal = () => {
    const [tabungan, setTabungan] = useState('');
    const [emas, setEmas] = useState('');
    const [saham, setSaham] = useState('');
    const [estate, setEstate] = useState('');
    const [mobil, setMobil] = useState('');
    const [lainnya, setLainnya] = useState('');
    const [hutang, setHutang] = useState('');
    const [total, setTotal] = useState('');
    const [hargaEmas, setHargaEmas] = useState('');
    const [nisab, setNisab] = useState('');
    const [, setAmount] = useState('');
    const [result, setResult] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [gold, setGold] = useState('');

    function formatToCurrency(value) {
        return `Rp. ${numeral(value).format('0,0')}`;
    }

    function handleClick() {
        const total =
        parseFloat(tabungan || 0) +
        parseFloat(emas || 0) +
        parseFloat(saham || 0) +
        parseFloat(estate || 0) +
        parseFloat(mobil || 0) +
        parseFloat(lainnya || 0) -
        parseFloat(hutang || 0);
    
        const nisab = 85 * parseFloat(hargaEmas || 0);
        const amount = 0.025 * total;
    
        setTotal(formatToCurrency(total));
        setNisab(formatToCurrency(nisab));
        setAmount(formatToCurrency(amount));
    
        if (isNaN(nisab) || nisab <= 0) {
        setGold('Harga Emas harus lebih dari 0');
        return;
        }

        if (parseFloat(hargaEmas) === 0) {
            setGold('Harga Emas tidak boleh 0');
            return;
        }
    
        if (total >= nisab) {
            setShowPopup(true);
            setResult(`${formatToCurrency(amount)} IDR`);
            setformdata({
                ...formdate,
                result: `${formatToCurrency(amount)} IDR`,
                tabungan: formatToCurrency(tabungan),
                emas: formatToCurrency(emas),
                saham: formatToCurrency(saham),
                estate: formatToCurrency(estate),
                mobil: formatToCurrency(mobil),
                lainnya: formatToCurrency(lainnya),
                hutang: formatToCurrency(hutang),
                total: formatToCurrency(total),
                hargaEmas: formatToCurrency(hargaEmas),
                nisab: formatToCurrency(nisab),
            })
        } else {
            setShowPopup(true);
            setResult('"Harta yang Anda miliki belum mencapai Nisab untuk Zakat Maal."');
            setformdata({
                ...formdate,
                result: 'Harta yang Anda miliki belum mencapai Nisab untuk Zakat Maal.',
                tabungan: formatToCurrency(tabungan),
                emas: formatToCurrency(emas),
                saham: formatToCurrency(saham),
                estate: formatToCurrency(estate),
                mobil: formatToCurrency(mobil),
                lainnya: formatToCurrency(lainnya),
                hutang: formatToCurrency(hutang),
                total: formatToCurrency(total),
                hargaEmas: formatToCurrency(hargaEmas),
                nisab: formatToCurrency(nisab),
            })
        }
    }

    const [formdate, setformdata] = useState({
        tabungan:"",
        emas:"",
        saham:"",
        estate:"",
        mobil:"",
        lainnya:"",
        hutang:"",
        total:"",
        hargaEmas:"",
        nisab:"",
        result:"",
        date: selectedDate,
      })
    
      function onResult() {
        SendToFirebase("zakatMaal", formdate)
        .then((res) => {
            console.log("Send To Firebase: ", res);
        })
        .catch((error) => console.log(error))
      }

    return (
        <div className='kalkulator'>
            <div className='kalkulator-container'>
                <div className='mal-left'>
                    <h1>Zakat Maal</h1>
                    <h2>Niat</h2>
                    <img src={niat} alt='niat' style={{ height: 'auto', width: '100%' }} />
                    <h3>"Nawaitu an ukhrija zakatadz maali fardhan lillahi ta’ala."</h3>
                    <p>"Artinya: Aku niat mengeluarkan zakat hartaku fardhu karena Allah Ta'ala."</p>
                </div>
                <div className='kalkulator-right'>
                    <label>Tabungan/Giro/Deposito/Sejenisnya (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={formatToCurrency(tabungan)}
                            onChange={(event) => {
                                setTabungan(event.target.value.replace(/\D/g, ''));
                                setformdata({...formdate, tabungan: event.target.value});
                            }} style={{ backgroundColor: 'rgba(255,255,255,.1)' }}>
                        </input>
                    </div>
                    <label>Emas/Perak/Permata/Sejenisnya (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={formatToCurrency(emas)}
                            onChange={(event) => {
                                setEmas(event.target.value.replace(/\D/g, ''));
                                setformdata({...formdate, emas: event.target.value});
                            }} style={{ backgroundColor: 'rgba(255,255,255,.1)' }}>
                        </input>
                    </div>
                    <label>Saham/Surat Berharga/Sejenisnya (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={formatToCurrency(saham)}
                            onChange={(event) => {
                                setSaham(event.target.value.replace(/\D/g, ''));
                                setformdata({...formdate, saham: event.target.value});
                            }} style={{ backgroundColor: 'rgba(255,255,255,.1)' }}>
                        </input>
                    </div>
                    <label>Real Estate (tidak termasuk tempat tinggal sekarang) (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={formatToCurrency(estate)}
                            onChange={(event) => {
                                setEstate(event.target.value.replace(/\D/g, ''));
                                setformdata({...formdate, estate: event.target.value});
                            }} style={{ backgroundColor: 'rgba(255,255,255,.1)' }}>
                        </input>
                    </div>
                    <label>Mobil (lebih dari keperluan) (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={formatToCurrency(mobil)}
                            onChange={(event) => {
                                setMobil(event.target.value.replace(/\D/g, ''));
                                setformdata({...formdate, mobil: event.target.value});
                            }} style={{ backgroundColor: 'rgba(255,255,255,.1)' }}>
                        </input>
                    </div>
                    <label>Harta Bentuk Lainnya (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={formatToCurrency(lainnya)}
                            onChange={(event) => {
                                setLainnya(event.target.value.replace(/\D/g, ''));
                                setformdata({...formdate, lainnya: event.target.value});
                            }} style={{ backgroundColor: 'rgba(255,255,255,.1)' }}>
                        </input>
                    </div>
                    <label>Hutang Pribadi/Konsumtif (jatuh tempo) (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={formatToCurrency(hutang)}
                            onChange={(event) => {
                                setHutang(event.target.value.replace(/\D/g, ''));
                                setformdata({...formdate, hutang: event.target.value});
                            }} style={{ backgroundColor: 'rgba(255,255,255,.1)' }}>
                        </input>
                    </div>
                    <label>Jumlah Harta Terhitung Zakat (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={total} disabled style={{ color: 'rgba(0, 0, 0, 0.9)', backgroundColor: 'rgb(255, 255, 255, .7)' }} />
                    </div>
                    <label>Harga Emas Saat Ini / Gram (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={formatToCurrency(hargaEmas)}
                            onChange={(event) => {
                                setHargaEmas(event.target.value.replace(/\D/g, ''));
                                setformdata({...formdate, hargaEmas: event.target.value});
                            }} style={{ backgroundColor: 'rgba(255,255,255,.1)' }}>
                        </input>
                        {gold !== '' && <p style={{ color: 'red' }}>{gold}</p>}
                    </div>
                    <label>Besar Nisab Maal / Tahun (IDR): </label>
                    <div class="input-group mb-3">
                        <input
                            className='form-control'
                            type="text"
                            value={nisab} disabled style={{ color: 'rgba(0, 0, 0, .9)', backgroundColor: 'rgba(255, 255, 255, .7)' }} />
                    </div>
                    <label>Tanggal:</label>
                    <div className="input-group mb-3">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => {
                                setSelectedDate(date);
                                setformdata({...formdate, date: date});
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
                                <p>Jumlah zakat maal yang harus Anda bayarkan setiap tahun sebesar:</p>
                                <h3>{result}</h3>
                                <Link
                                    to='/riwayatmaal'
                                    className='popup-button'
                                    onClick={() => {
                                        onResult();
                                        setShowPopup(false);
                                        }}>Simpan</Link>
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

export default KalkulasiMal