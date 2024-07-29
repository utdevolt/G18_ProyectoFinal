
export default function HeaderBarHome (props){

  // // almaceno la función de apertura del modal
  // function handleModalLogin (status) {
  //   props.handleModalLogin(status);
  // }

  return (
    <header className="w-full h-[20vh] flex justify-center border-4 border-black"> 

      {/*ícono menú desplegable - mobile */}
      <img className="cursor-pointer h-6 pr-20 lg:hidden border-4" 
        id="imageButton" 
        src="src\assets\icons\menu-outline.svg" 
        alt=""/>

      {/* Location + WSP    max-lg:hidden*/}
      <div className="w-1/4 flex justify-center bg-blue-300">
        <div className="w-1/2 border-4 flex justify-center items-center"> 
          <a className="w-3/4 border-4 border-red-500 flex" href="#">
            <img className="w-1/4 bg-lime-600" src="src/assets/icons/location-outline.svg" alt="" />
            <p className="w-3/4 bg-amber-300 p-1">Ubícanos</p>  
          </a>
        </div>

        <div className="w-1/2 border-4 flex justify-center items-center"> 
          <a className="w-4/5 border-4 border-red-500 flex" href="#">
            <img className="w-1/4 bg-lime-600" src="src\assets\icons\logo-whatsapp.svg" alt="" />
            <p className="w-3/4 bg-amber-300 p-1">Contáctanos</p>  
          </a>
        </div>
      </div>


      {/* LOGO WAWITAS */}
      <div className="w-1/2 md:w-50 bg-orange-600 flex justify-center">
        <img src="src\assets\images\logo.png" alt="" />
      </div>


      {/* Search + Login + Cart */}
      <div className="w-1/4 flex justify-end items-center pr-[1.5%] gap-[6%] bg-blue-300">
        
        <div className="h-1/3 border-4 bg-emerald-600">
          <button className="flex w-full h-full">
            <img className="w-auto h-full bg-amber-300" src="src\assets\icons\search-outline.svg" alt=""/>
          </button>
        </div>

        <div className="h-1/3 border-4 bg-emerald-600">
          <button 
            onClick={props.openUserModal}
            className="flex w-full h-full"
          >
          <img className="w-auto h-full bg-amber-300" src="src\assets\icons\person-outline.svg" alt=""/>
          </button>
        </div>

        <div className="h-1/3 border-4 bg-emerald-600">
          <button className="flex w-full h-full">
          <img className="w-auto h-full bg-amber-300" src="src\assets\icons\heart-outline.svg" alt="" />
          </button>
        </div>

        <div className="h-1/3 border-4 bg-emerald-600">
          <button className="flex w-full h-full">
          <img className="w-auto h-full bg-amber-300" src="src\assets\icons\bag-outline.svg" alt="" />
          </button>
        </div>

      </div>
    </header>
  );
}










{/* <button className="w-1/3 border-4 flex justify-center items-center">
<img className="w-1/2 h-1/2" src="src\assets\icons\search-outline.svg" alt=""/>
</button>

<button className="w-1/3 border-4 flex justify-center items-center">
<img className="w-1/2 h-1/2" src="src\assets\icons\person-outline.svg" alt=""/>
</button>

<button className="w-1/3 border-4 flex justify-center items-center">
<img className="w-1/2 h-1/2" src="src\assets\icons\bag-outline.svg" alt="" />
</button> */}

