import React from 'react';
import {cekTahun, cekHari} from '../utils/waktu'

const Hello = () => {
return (
    <>
        <p>Hello, selamat Datang di web Programming</p>
        <p>Tahun sekarang adalah {cekTahun()}</p>
        <p>Sekarang Tanggal {cekHari()}</p>
    </>
 )
}

export default Hello;