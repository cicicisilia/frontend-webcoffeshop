
import { Link } from 'react-router-dom';
import React from 'react';

function Pemesanan  () {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4"> Pemesanan</h1>

     
      <form className="max-w-md mx-auto">

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jumlah">
            Jumlah pesanan:
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700 "
            id="Jumlah"
            type="text"
            placeholder="Masukkan jumlah pesanan anda"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nama:
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700 "
            id="name"
            type="text"
            placeholder="Masukkan nama Anda"
          />
        </div>

      
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Alamat:
          </label>
          <textarea
            className=" border rounded w-full py-2 px-3 text-gray-700 "
            id="address"
            placeholder="Masukkan alamat Anda"
          ></textarea>
        </div>
        <div className=" h-8 bg-amber-950 hover:bg-amber-900  rounded-lg">
       <center> <Link to="/proses" className="font-bold text-white "> pesan sekarang </Link> </center>
        </div>
      </form>
    </div>
  
    
  );
};

export default Pemesanan;