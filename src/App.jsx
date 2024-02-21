import Start from "./component/layout/start.jsx";
import Home from "./component/layout/home.jsx";
import MainLayout from "./component/pages/MainLayout.jsx";
import Pemesanan from "./component/pages/pemesanan.jsx";
import proses from "./component/pages/proses.jsx";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import React from 'react';
 function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<MainLayout />} />
        <Route index element={<Start />} />
        <Route path="/home" element={<Home />} />
      <Route path="/pemesanan" element={<Pemesanan />} />
       <Route path="/proses" element={<proses />} />
     </Routes>
   </BrowserRouter>
  )
}
export default App;