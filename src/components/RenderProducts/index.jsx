import { useSelector} from "react-redux";

export default function RenderProducts() {

  const cartRenderProducts = useSelector((state)=>state.cartProductsData.cartProductsArray);
  const cartRenderUnits = useSelector((state)=>state.cartProductsData.cartUnitsArray);
  const cartTotalPrice = useSelector((state)=>state.cartProductsData.cartTotalPrice);
  
  
  // // Render Products
  // const productsToRenderInCart = cartRenderProducts.map((product, index) => {
  //   return (
  //     <li key={product.id} className="flex flex-col h-[35%] mb-1">
  //       <div className="flex h-4/5">
  //         <div className="flex flex-col w-[15%] h-full justify-center gap-2 items-center">
  //           <p className="w-3/5 bg-white border text-center rounded-md">
  //             {cartRenderUnits[index]}
  //           </p>
  //         </div>

  //         <div className="flex w-[85%] h-full items-center justify-between mb-2">
  //           <img
  //             className="h-4/5 rounded-md border border-gray-200"
  //             src={product.image}
  //             alt={product.title}
  //           />

  //           <div className="flex flex-col h-full justify-center text-right items-end">
  //             <div className="flex flex-col items-end">
  //               <p className="">
  //                 {product.title} {index}
  //               </p>
  //               <span className="">S/.{product.price}</span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </li>
  //   );
  // });

  // const renderCartProducts = (value) => {
  //   return value === 0 ? (
  //     <p>Tu carrito aún no tiene productos. </p>
  //   ) : (
  //     productsToRenderInCart
  //   );
  // };
  

  return (

    <div className="flex justify-between h-[70%] p-5 border-4 border-black overflow-auto">
      <ul className="my-1 w-full divide-y-4 divide-gray-200">
        {console.log("Hola Melu",cartRenderProducts,cartRenderUnits,cartTotalPrice)}
        {/* {renderCartProducts(cartTotalPrice)} */}
        hola mundo
      </ul>
    </div>

  );
}
