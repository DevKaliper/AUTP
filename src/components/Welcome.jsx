const Welcome = () => {
  return (
    <>
      <div className="overflow-hidden ">
        <div className="flex h-screen w-screen flex-col items-center justify-start overflow-hidden px-2">
          <div className="flex flex-col items-center justify-start">
            {/* MENSAJE DE BIENVENIDA */}
            <h1 className="my-2 text-2xl font-bold text-white md:text-4xl xl:text-6xl">
              ¡ Bienvenidos a Arboles UTP !
            </h1>
            <h2
              className=" md:text-2 xl
                text-center text-base font-bold italic text-gray-600 xl:text-2xl">
              Un espacio dedicado a los arboles de nuestra universidad
            </h2>
          </div>

          {/* SVG CON IMAGEN (YA NO HAY SVG) */}
          <div id="SVG-container">
            {/* TODO. 
             HACER RESPONSIVE LA IMAGEN
            */}
            <img className="absolute object-cover top-0 left-0 w-full h-full" src="https://i.ibb.co/z4c8nmC/ft-Entrada.png" alt="" />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
