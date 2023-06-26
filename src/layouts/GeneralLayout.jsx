import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DefaultSpeedDial from "../components/SpeedDial";


export const GeneralLayout = () => {
  return (
    <>

        <NavBar />


        <main >
          <Outlet />
          {/* ICONO FLOTANTE EN LA PAGINA */}
          <DefaultSpeedDial />

        </main>

        <Footer />

  
   

 
    </>
  );
};
