import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Definisi from './routes/Definisi'
import Penerima from './routes/Penerima'
import Syarat from './routes/Syarat'
import Jenis from './routes/Jenis'
import KalkulatorPenghasilan from './routes/Kalkulator'
import Hukum from './routes/Hukum'
import Masuk from './routes/Masuk'
import Resgistrasi from "./routes/Registrasi";
import KalkulatorMal from "./routes/KalkulatorMal";
import Zakat from "./routes/Zakat";
import KalkulatorZakat from "./routes/KalkulatorZakat";
import RiwayatPenghasilan from './routes/RiwayatPenghasilan'
import RiwayatMaal from './routes/RiwayatMaal'
import Profil from "./routes/Profil";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zakat" element={<Zakat/>} />
        <Route path="/definisi" element={<Definisi />} />
        <Route path="/penerima" element={<Penerima />} />
        <Route path="/syarat" element={<Syarat />} />
        <Route path="/jenis" element={<Jenis />} />
        <Route path="/kalkulator" element={<KalkulatorZakat />} />
        <Route path="/kalkulatorpenghasilan" element={<KalkulatorPenghasilan />} />
        <Route path="/kalkulatormaal" element={<KalkulatorMal/>} />
        <Route path="/hukum" element={<Hukum />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/registrasi" element={<Resgistrasi />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/riwayatpenghasilan" element={<RiwayatPenghasilan />} />
        <Route path="/riwayatmaal" element={<RiwayatMaal />} />
      </Routes>
    </div>
  );
}

export default App;
