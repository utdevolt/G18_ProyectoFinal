export default function NavigateBarHome (){
  return (
    <nav className="nav-links flex min-h-fit xl-min-fit min-h-[60vh] left-0 max-lg:hidden md:w-auto w-full     
      items-center px-5 md:flex-row justify-center md:w-full"> 


      {/* Categories Bar */}
      <div className="flex md:flex-row items-center md:gap-[4vw] p-5 ">
        <a href="#" className="hover:text-gray-300">Bebe</a>
        <a href="#" className="hover:text-gray-300">Beba</a>
        <a href="#" className="hover:text-gray-300">Niñas</a>
        <a href="#" className="hover:text-gray-300">Niños</a>
        <a href="#" className="hover:text-gray-300">Accesorios</a>
        <a href="#" className="hover:text-gray-300">SET</a>
      </div>

    </nav>
  );
}


