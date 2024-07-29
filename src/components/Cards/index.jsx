export default function Cards({products, onAddProduct}) {
  
  return (
    <>
      <section className="w-full h-full m-auto flex justify-center">
        <div className="w-full h-full grid grid-cols-2 gap-5 p-5 max-md:grid-cols-2 md:p-10 md:gap-10 md:px-16 lg:grid-cols-3 xl:grid-cols-4 xl:px-28">
          {products?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between h-full w-full bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div className="flex justify-center w-full h-[45%] bg-white object-cover">
                <img src={product.img_url} alt={product.nombre} className="h-full w-full"/>
              </div>

              <div className="w-full h-[15%] p-3 flex flex-col justify-between items-center gap-3 md:gap-3.5 md:py-5">
                <h2 className="text-xl font-bold text-center md:text-[16px]">{product.nombre}</h2>
              </div>
              
              <div className="px-5 w-full h-[25%] md:text-sl text-[85%]">
               <p>{product.descripcion}</p>
              </div>

              <div className="flex justify-center w-full h-[7%]">
                <p className="font-bold md:text-xl">S/.{product.precio}</p>
              </div>

              <div className="flex items-center w-full h-[8%]">
                <button
                    className="bg-black text-white font-bold transition-all text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 hover:bg-pink w-full hover:scale-105 focus:scale-105 active:scale-110 md: mx-4"
                    onClick={()=> onAddProduct(product)}
                  >
                    Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
