import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";



const Welcome = () => {

  
  gsap.registerPlugin(TextPlugin);
  // para la animacion del texto
  useEffect(() => {  gsap.to("#VistaUTP", {delay:3, duration: 2, text: "¡ Bienvenidos a Vista UTP !", ease:"power2" });
   gsap.to("#infoVistaUTP", {delay:5, duration: 4, text: "Un espacio dedicado a la vida en nuestra universidad", ease:"none" });
  //  con el array de dependencias vacio, se ejecuta solo una vez cada vez que se renderiza el componente (cuando se actualiza la pagina)
}, []);

  return (
    <>
      <div className="overflow-hidden ">
        <div className="flex h-screen relative w-screen flex-col items-center justify-center overflow-hidden px-2"> 
        

          {/* DIVIDER DE LA PARTE SUPERIOR */}
          {/* <div className="absolute -z-10 top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2D3B42" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,112C384,96,480,64,576,74.7C672,85,768,139,864,149.3C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          </div> */}



        {/* MENSAJE DE BIENVENIDA */}
          <div className="flex flex-col items-center justify-start">
           
            <h1 id="VistaUTP" className="mb-2 text-2xl font-bold text-white md:text-5xl xl:text-6xl">
              ¡ Queridos Compañeros !
            </h1>
            <h2 id="infoVistaUTP"
              className=" md:text-3xl mt-2
                text-center text-base font-bold italic text-gray-600 xl:text-2xl">
                  {/* texto vacío para poder rellenarlo en la animacion de gsap */}

            </h2>
          </div>

          {/* SVG CON IMAGEN (YA NO HAY SVG) */}
          <div id="SVG-container" className="w-[361px] h-[361px] md:w-[591px] md:h-[591px]">
            {/* TODO. 
            HACER RESPONSIVE LA IMAGEN (done)
            HACER RESPONSIVE EL CONTENEDOR (done)
            CONVERTIR EN UN CARRUSEL DE IMAGENES
            */}
            <img className="absolute object-cover top-0 left-0 w-full h-full" src="https://i.ibb.co/z4c8nmC/ft-Entrada.png" alt="" />
            
          </div>

          {/* Divider de la parte inferior */}

          <div className="absolute -z-10 bottom-0 left-0 w-full ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2D3B42" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
