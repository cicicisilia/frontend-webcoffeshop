import React from 'react';
import { Link } from 'react-router-dom';
import Kopi from "../../assets/image/kopi6.png";

function Start  () {
  return (
   <div className="bg-gradient-to-r from-amber-950 to-amber-800 h-dvh  ">
     <center>
       <img src={Kopi} className=" size-96 "/>
       <h1 className="p-8 text-4xl font-bold text-white animate-bounce">Selamat Datang di Kopi Kenangan Manis</h1>
       <h1 className="p-8 text-xl text-white animate-pulse">Ayo buat kenangan manis bersama kami dengan cara memesan kopi</h1>
      <Link to="/home" className="font-bold text-white bg-amber-700 rounded-full p-4 px-12 bg-amber-800">Get Started</Link>
     </center>
   </div>

  );
};

export default Start;