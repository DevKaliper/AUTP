import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {

  HomeIcon,
  MoonIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";



// ICONO FLOTANTE EN LA PARTE INFERIOR DERECHA
 
export default function DefaultSpeedDial() {
  return (
    
      <div className="fixed  bottom-[90px] right-5">
             <SpeedDial >
          <SpeedDialHandler>
            <IconButton color="white" size="lg" className="rounded-full border border-blue-gray-50 shadow-xl">
              <CogIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="rounded-full border border-blue-gray-50 bg-white shadow-xl shadow-black/10">
            <SpeedDialAction className="bg-blue-gray-50">


              {/* PARA VOLVER AL INICO */}
             <a href="#"><HomeIcon  className="h-5 w-5" /></a> 
            </SpeedDialAction>


            <SpeedDialAction className="bg-blue-gray-50">

              {/* PARA CAMBIAR DE MODO NOCTURNO */}
              <MoonIcon className="h-5 w-5" />
            </SpeedDialAction>

            {/* QUIZAS PARA ABRIR UN DRAWER Y CAMBIAR DE PAGINAS */}
            <SpeedDialAction className="bg-blue-gray-50">
              <Square3Stack3DIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
   
   
 
  );
}