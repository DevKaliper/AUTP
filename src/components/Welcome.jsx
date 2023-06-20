const Welcome = () => {
    
    return (<>

    <div className="px-8 min-h-full min-w-full ">
        <div className="flex flex-col gap-3 justify-center items-center md:flex-row md:justify-between w-full h-auto  p-3">
        <h1 className="text-[#1F383E] font-semibold  text-6xl md:flex-grow ">¡Bienvenidos a Arboles UTP!</h1>
        <input type="text" placeholder="Buscar..." className="h-8 w-3/4 md:w-1/2 p-2 rounded-xl shadow-xl  drop-shadow-sm outline-none" />

        </div>

        <div className="my-5 flex gap-5 w-full h-full " >
            
                <img src="https://i.ibb.co/z4c8nmC/ft-Entrada.png" alt="imagen de entrada" className="rounded-3xl w-1/2 h-1/4"/>
            

            <div id="parrafo-de-entrada " className="py-4 flex flex-col justify-around w-1/2 max-h-1/2 items-center relative"
            >
                <h3 className="text-[#1F383E] font-semibold  text-3xl ">Una página web dedicada especialmente a los arboles de nuestra Universidad</h3>

                <p className="text-[#1F383E] font-bold  text-lg text-start italic">Lorem ipsum dolo Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div>
                    <span className="text-white text-2xl text-start"> Junio 34 </span>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>)
}

export default Welcome;