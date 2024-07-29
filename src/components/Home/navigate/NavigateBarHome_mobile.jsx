
// Este componente muestra el side bar en el modo mobile, 
// al presionar el ícono de 3 barras - Pendiente enlazar la funcionalidad de despliegue 

export default function NavigateBarHome_mobile() {
  return (
    
    <section className="bg-[gray] absolute top-0 h-[100%] opacity-80 lg:hidden">
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto   
        text-center bg-gray-900">

        {/* Title*/}
        <div className="flex justify-between">
          <h1 className="font-bold text-gray-200 text-[30px] ml-3">Wawitas</h1>
          <img className="h-5 fill-white" src="src\assets\icons\close-outline.svg" alt=""/>
        </div>

        {/* Input: SEARCH */}
        <div>
          <div className="p-3 mt-3 flex items-center rounded-md px-2 cursor-pointer bg-gray-700 text-white">
            <img className="h-5" src="./assets/icons/search-outline.svg" alt=""/>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-3 w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>


        {/* Dividing line*/}
        <hr className="my-2 border-4" /> 

        <div className="flex flex-col ml-0 text-gray-200 p-2">
          <a href="#" className="py-2 w-full hover:bg-gray-600 rounded-lg duration-300">Bebe</a>
          <a href="#" className="py-2 w-full hover:bg-gray-600 rounded-lg duration-300">Beba</a>
          <a href="#" className="py-2 w-full hover:bg-gray-600 rounded-lg duration-300">Niño</a>
          <a href="#" className="py-2 w-full hover:bg-gray-600 rounded-lg duration-300">Niña</a>
        </div>


        {/* Dividing line*/}
        <hr className="my-2" />

        <div className="flex flex-col ml-0 text-gray-200 p-2">
          <a href="#" className="py-2 w-full hover:bg-gray-600 rounded-lg duration-300">Mayoral</a>
          <a href="#" className="py-2 w-full hover:bg-gray-600 rounded-lg duration-300">Accesorios</a>
        </div>


        {/* Dividing line*/}
        <hr className="my-2 p-4" />


        {/* LogOut Button */}
        <div className="flex justify-center align-row text-gray-200 hover:bg-gray-600 rounded-lg duration-300 p-3">
          <img className="h-5" src="src\assets\icons\log-out-outline.svg" alt=""/>
          <button className="px-6">LogOut</button>
        </div>

      </div>
    </section>

  );
}


//