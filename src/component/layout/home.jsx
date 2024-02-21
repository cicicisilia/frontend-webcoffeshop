import Cappucino from "../../assets/image/cappucino.jpg";
import Americano from "../../assets/image/americano.jpg";
import Espresso from "../../assets/image/espresso.jpg";
import Mocha from "../../assets/image/mocachino.jpg";
import Kopi6 from "../../assets/image/kopi8.jpg";
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../../App.css"
import gulaaren from "../../assets/image/kopi gula aren.jpg";
import frappee from "../../assets/image/frappee.jpg";
import Coffeelatte from "../../assets/image/coffee latte.jpg";
import Caramelmachiato from "../../assets/image/caramel machiato.jpg";
import Kopigulaaren from "../../assets/image/kopi gula aren.jpg";
import Kopi from "../../assets/image/kopi7.png";
import Kopii from "../../assets/image/kopi6.png";


function Home() {
  
  return (
   <div>
     <div className="relative">
        <div className=" bottom-0 left-0 right-0 mb-32 ">
         
          <img className="w-full h-[28rem] " src={Kopi6}/>
         
            <div className=" flex justify-center  absolute right-0 left-0 top-32 "> 
               <div className="relative  flex flex-nowrap bg-amber-950 mt-20 w-1/2 rounded-lg py-14">
                 <div className="absolute inset-x-0 top-0 h-16 ">
                  <center><h1 className=" text-white text-xl font-bold pt-8 pb-8">Best Sellers</h1></center>  
                    </div>
               <div className="absolute inset-x-0 top-0 h-16 flex flex-nowrap mt-16">
               <h1 className="ml-[6rem] mt-14 text-white text-base font-bold">Top 2</h1>
               <h1 className="ml-[10rem] mt-4 pl-4 text-white text-base font-bold">Top 1</h1>
               <h1 className="ml-[10rem] mt-14 pl-2 text-white text-base font-bold">Top 3</h1>
               </div>
                    <div className="absolute inset-x-0 top-0 h-16 flex flex-nowrap mt-16">
                    <h1 className="ml-[6rem] pl-2 mt-20 text-white text-base font-bold">4.8</h1>
                    <h1 className="ml-[12rem]  mt-10 text-white text-base font-bold">5.0</h1>
                    <h1 className="ml-[12rem]  mt-20 text-white text-base font-bold">4.6</h1>
                    </div>
               <img src={Caramelmachiato} className="size-32 ml-16 rounded-lg  mt-32 " / >
               <img src={Coffeelatte} className="size-32 ml-20 rounded-lg  mt-20 " / >
               <img src={Kopigulaaren} className="size-32 ml-20 rounded-lg  mt-32  " / >
            </div>
             </div>
        
     </div> 
   </div>
     <div id="2" class="flex flex-row pl-[10rem] pt-[15rem] gap-x-[6rem] pr-[18rem] ">
       <img src={Kopii} class="w-[30%]  animate-bounce" />
       <div>
         <h2 class="font-bold text-[28px] pb-6">Kopi kenangan manis</h2>
         <p className="py-4">
           Sebagai penikmat kopi atau bahkan pemilik bisnis kopi, Anda mungkin punya pertimbangan tersendiri ketika memilih biji kopi terbaik. Kami menjual kopi berkualitas dengan harga kopi terbaik karena kami paham dengan apa yang Anda inginkan. Secara umum, pastinya Anda mempertimbangkan beberapa hal berikut ini, sebelum berlangganan kopi.
         </p>
         <p> kami memiliki berbagai macam produk dengan jangkauan harga yang berbeda-beda. Anda bisa mendapatkan coffee beans dengan berat 200 gram seharga mulai dari 15 ribuan. Bila Anda ingin mencoba drip coffee dengan kualitas dan cita rasa terbaik, cukup merogoh kocek sebesar 60 ribuan.Untuk melihat daftar harga produk-produk kopi yang dimiliki Otten Coffee, Anda cukup memilih kategori yang Anda inginkan. 

 </p>
       </div>
     </div>


     <div className="mt-[15rem] bg-amber-950 py-8 ">
       <div className=" flex flex-nowrap ">
          <img src={Kopi} className="size-20 ml-[14rem]"/>
          <img src={Kopi} className="size-20 ml-[11rem]"/>
          <img src={Kopi} className="size-20 ml-[13rem]"/>
          <img src={Kopi} className="size-20 ml-[14rem]"/>
        </div>
       <div className=" flex flex-nowrap text-white">
         <h1 className="ml-[15rem]">100% </h1>
         <h1 className="ml-[14rem]">1,3jt</h1>
         <h1 className="ml-[14rem]">tanpa pengawet</h1>
         <h1 className="ml-[14rem]">100%</h1>
       </div>
       <div className=" flex flex-nowrap text-white">
          <h1 className="ml-[13rem]">dari kopi asli </h1>
          <h1 className="ml-[12rem]">pembeli</h1>
          <h1 className="ml-[14rem]">dan pewarna</h1>
          <h1 className="ml-[15rem]">halal</h1>
        </div>
     </div>
     
      <div className="card flex flex-row justify-center space-x-16 mt-24    "> 
        <div className="imgs bg-amber-950 mt-24  pt-8  px-8 rounded-lg py-8 ">
         <center> <img src={Cappucino} className="h-24 mb- rounded-lg text-white" / ></center>
          <h1 className="text-white">Cappucino</h1>
          <h1 className="text-white mt-8 mb-4 ">Rp20.000</h1>
          <Link to="/pemesanan" className="bg-white py-2 px-2 rounded-md px-20">+</Link>
        </div>
        <div className="imgs bg-amber-950 mt-24  pt-8  px-8 rounded-lg py-8">
         <center> <img src={Americano} className="h-24 w-24 mb- rounded-lg text-white" / ></center>
          <h1 className="text-white">Americano</h1>
          <h1 className="text-white mt-8 mb-4 ">Rp.15.000</h1>
           <Link to="/pemesanan" className="bg-white py-2 px-2 rounded-md px-20">+</Link>
        </div>
      </div>
     <div className="card flex flex-row justify-center space-x-16 "> 
       <div className="imgs bg-amber-950 mt-24  pt-8  px-8 rounded-lg py-8 ">
        <center> <img src={Espresso} className="h-24 w-24 mb- rounded-lg text-white" / ></center>
         <h1 className="text-white">Espresso</h1>
         <h1 className="text-white mt-8 mb-4 ">Rp.12.000</h1>
          <Link to="/pemesanan" className="bg-white py-2 px-2 rounded-md px-20">+</Link>
       </div>
       <div className="imgs bg-amber-950 mt-24  pt-8  px-8 rounded-lg ">
        <center> <img src={Mocha} className="h-24 w-24 mb- rounded-lg text-white" / ></center>
         <h1 className="text-white">Mocha</h1>
         <h1 className="text-white mt-8 mb-4 ">Rp.25.000</h1>
          <Link to="/pemesanan" className="bg-white py-2 px-2 rounded-md px-20">+</Link>
       </div>
     </div>
      <div className="card flex flex-row justify-center space-x-16 "> 
     <div className="imgs bg-amber-950 mt-24  pt-8  px-8 rounded-lg py-8 ">
        <center> <img src={gulaaren} className="h-24 w-24 mb- rounded-lg text-white" / ></center>
         <h1 className="text-white">kopi gula aren</h1>
         <h1 className="text-white mt-8 mb-4 ">Rp.15.000</h1>
          <Link to="/pemesanan" className="bg-white py-2 px-2 rounded-md px-20">+</Link>
       </div>
      <div className="imgs bg-amber-950 mt-24  pt-8  px-8 rounded-lg ">
       <center> <img src={frappee} className="h-24 w-24 mb- rounded-lg text-white" / ></center>
        <h1 className="text-white">frappee</h1>
        <h1 className="text-white mt-8 mb-4 ">Rp.25.000</h1>
         <Link to="/pemesanan" className="bg-white py-2 px-2 rounded-md px-20">+</Link>
      </div>
      </div>
   </div>  
  );
}

export default Home;