import Start from "../../component/layout/start.jsx";
import Home from "../../component/layout/home.jsx";
import Pemesanan from "../../component/pages/pemesanan.jsx";
import Proses from "../../component/pages/proses.jsx";

function MainLayout() {
  return (
    <>
      <Start />
      <Home />
      <Pemesanan />
      <Proses />
    </>
  );
}

export default MainLayout;