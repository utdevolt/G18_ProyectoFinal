import { useState, useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import {
  setCartProductsArray,
  setCartUnitsArray,
  setCartTotalPrice,
  setCartTotalUnits,
} from "../../app/slices/cartProductsData";

//Public Key
initMercadoPago("TEST-d06edb11-cc31-48ed-acf7-0e8007c6c1e7");

export default function Header(props) {
  const dispatch = useDispatch();

  // VARIABLES GLOBALES
  // Formato del botón pagar
  const cartPayButtColor = useSelector(
    (state) => state.cartPayButtonFormat.buttonColor
  );
  const cartPayButtBorder = useSelector(
    (state) => state.cartPayButtonFormat.borderColor
  );
  const cartPayButtHover = useSelector(
    (state) => state.cartPayButtonFormat.hoverFormat
  );

  // DATOS DE LOS PRODUCTOS: MODELO + PRECIO
  const cartRenderProducts = useSelector(
    (state) => state.cartProductsData.cartProductsArray
  );
  const cartRenderUnits = useSelector(
    (state) => state.cartProductsData.cartUnitsArray
  );
  const cartTotalPrice = useSelector(
    (state) => state.cartProductsData.cartTotalPrice
  );
  const cartTotalUnits = useSelector(
    (state) => state.cartProductsData.cartTotalUnits
  );
  // Uso de reducers para el renderizado del resumen de compra
  const handleCartRenderProducts = (array) => {
    dispatch(setCartProductsArray(array));
  };

  const handleCartRenderUnits = (array) => {
    dispatch(setCartUnitsArray(array));
  };

  const handleCartTotalPrice = (totalPrice) => {
    dispatch(setCartTotalPrice(totalPrice));
  };

  const handleCartTotalUnits = (totalUnits) => {
    dispatch(setCartTotalUnits(totalUnits));
  };

  function saveDataInLocalStorage() {
    localStorage.setItem(
      "cartRenderProducts",
      JSON.stringify(cartRenderProducts)
    );
    localStorage.setItem("cartRenderUnits", JSON.stringify(cartRenderUnits));
    localStorage.setItem("cartTotalPrice", JSON.stringify(cartTotalPrice));
    localStorage.setItem("cartTotalUnits", JSON.stringify(cartTotalUnits));
  }

  // const [active, setActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Status:   True = Open  -  False = Close
  var [cartStatus, setCartStatus] = useState(false);
  var [cartModalStatus, setCartModalStatus] = useState(false);
  const openCart = () => {
    props.setblockBG(true);
    setCartModalStatus(true);
    setCartStatus(true);
  };
  const closeCart = () => {
    props.setblockBG(false);
    setCartModalStatus(false);
    setCartStatus(false);
  };

  // Eliminar productos del carrito
  const removeProductFromCart = (index) => {
    const updatedCart = cartRenderProducts.filter((_, i) => i !== index); //metodo filter primer parametro ignoramos
    props.setProductsCart(updatedCart);
    handleCartRenderProducts(updatedCart);

    // Primero actualiza la cuenta del carrito
    const updatedCount = cartTotalUnits - props.unitsPerProduct[index];
    props.setCount(updatedCount);
    handleCartTotalUnits(updatedCount);

    // Luego elimina el elemento
    const updatedproductUnits = cartRenderUnits.filter((_, i) => i !== index); // borra el elemento del array de unidades
    props.setunitsPerProduct(updatedproductUnits);
    handleCartRenderUnits(updatedproductUnits);
    calculateTotalPrice();
  };

  // var [productUnits, setProductUnits] = useState(1);

  const maxLimitPerProductMessage = (units) => {
    if (units >= props.maxUnits) {
      return (
        <div className="h-1/5 font-bold text-xs text-red-700 mt-1">
          <p>Cantidad máxima de productos</p>
        </div>
      );
    }
  };

  const incrementProductUnits = (productUnits, indexProd) => {
    const updatedUnits = cartRenderUnits.map((units, index) => {
      if (index === indexProd && productUnits < props.maxUnits) {
        props.setCount(cartTotalUnits + 1);
        handleCartTotalUnits(cartTotalUnits + 1);
        return units + 1;
      }
      return units;
    });
    handleCartRenderUnits(updatedUnits);
    calculateTotalPrice();
    return props.setunitsPerProduct(updatedUnits);
  };

  const decrementProductUnits = (productUnits, indexProd) => {
    const updatedUnits = cartRenderUnits.map((units, index) => {
      if (index === indexProd && productUnits > props.minUnits) {
        props.setCount(cartTotalUnits - 1);
        handleCartTotalUnits(cartTotalUnits - 1);
        return units - 1;
      }
      return units;
    });
    handleCartRenderUnits(updatedUnits);
    calculateTotalPrice();
    return props.setunitsPerProduct(updatedUnits);
  };

  // Render Products
  const productsToRenderInCart = cartRenderProducts.map((product, index) => {
    return (
      <li key={product.id} className="flex flex-col h-[35%] mb-1">
        <div className="flex h-4/5">
          <div className="flex flex-col w-[15%] h-full justify-center gap-2 items-center">
            <button
              onClick={() =>
                incrementProductUnits(cartRenderUnits[index], index)
              }
              className="w-3/5 h-[20%] flex justify-center items-center border rounded-xl bg-gray-200 hover:bg-peach"
            >
              <i className="fa-solid fa-angle-up"></i>
            </button>

            <p className="w-3/5 bg-white border text-center rounded-md">
              {cartRenderUnits[index]}
            </p>

            <button
              onClick={() =>
                decrementProductUnits(cartRenderUnits[index], index)
              }
              className="w-3/5 h-[20%] flex justify-center items-center border rounded-xl bg-gray-200 hover:bg-peach"
            >
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>

          <div className="flex w-[85%] h-full items-center justify-between mb-2">
            <img
              className="h-4/5 rounded-md border border-gray-200"
              src={product.img_url}
              alt={product.nombre}
            />

            <div className="flex flex-col h-full justify-center text-right items-end">
              <button className="" onClick={() => removeProductFromCart(index)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <div className="flex flex-col items-end">
                <p className="">
                  {product.nombre} {index}
                </p>
                <span className="">S/.{product.precio}</span>
              </div>
            </div>
          </div>
        </div>

        {maxLimitPerProductMessage(cartRenderUnits[index])}
      </li>
    );
  });

  const renderCartProducts = (value) => {
    return value === 0 ? (
      <p>Tu carrito aún no tiene productos. </p>
    ) : (
      productsToRenderInCart
    );
  };

  //CÁLCULO DEL PRECIO TOTAL
  const calculateTotalPrice = () => {
    handleCartTotalPrice(
      cartRenderProducts.reduce(
        (accumulator, nextProduct) =>
          accumulator +
          nextProduct.precio *
            cartRenderUnits[
              cartRenderProducts.findIndex((elem) => elem.id === nextProduct.id)
            ],
        0
      )
    );
    setTotalPrice(cartTotalPrice);
  };

  // Cálculo del total de unidades
  const calculateTotalUnits = () => {
    handleCartTotalUnits(
      cartRenderUnits.reduce(
        (accumulator, nextProduct) => accumulator + nextProduct,
        0
      )
    );
  };

  useEffect(() => {
    //usamos UseEffect para que automáticamente corra la funcion cuando algo se modifica en [productCart]
    calculateTotalPrice();
    calculateTotalUnits();
    saveDataInLocalStorage();
  });

  const handlePagar = () => {
    console.log(
      cartRenderProducts,
      cartRenderUnits,
      cartTotalPrice,
      cartTotalUnits
    );
  };

  const customization = {
    visual: {
      buttonBackground: "black",
      borderRadius: "6px",
    },
  };

  return (
    <>
      <header className="bg-white w-full h-full">
        <p className="bg-blue text-white p-2 text-center text-sm">
          Envíos gratis a Lima y Provincia por compras superiores a S/120.
        </p>

        <div className="w-full h-full pl-[1%] flex justify-between items-center">
          {/* <i className="text-pink fa-solid fa-bars fa-2xl cursor-pointer"></i> */}

          {/* Logo de la página */}
          <a href="https://g18-proyecto-final.vercel.app/">
            <img className="w-[40%]" src={logo} />
          </a>

          {/* Zona de íconos - user + cart */}
          <div className="flex w-[15%] h-full">
            {/* user icon*/}
            <div className="w-1/2 flex justify-center items-center">
              <button onClick={props.openUserModal}>
                <i className="text-blue fa-regular fa-user fa-2xl"></i>
              </button>
            </div>

            {/* cart icon*/}
            <div className="w-1/2 h-full flex justify-center items-center">
              <button onClick={openCart}>
                <i className="text-blue relative fa-solid fa-cart-shopping fa-2xl">
                  <span className="flex justify-center items-center bg-pink rounded-full w-[30px] h-[30px] text-lg text-white absolute bottom-2 left-5">
                    {cartTotalUnits}
                  </span>
                </i>
              </button>
            </div>
          </div>

          {/* Cart desplegado */}

          <div
            className={`w-screen h-screen absolute right-0 top-0 flex justify-center items-center bg-black/70 ${
              cartModalStatus ? "" : "hidden"
            }`}
          >
            <aside
              className={`${
                cartStatus ? "" : "hidden"
              } bg-white flex flex-col w-[35%] h-full absolute right-0 top-0 justify-between`}
            >
              {/* HEADER DEL CARRITO DESPLEGADO */}
              <div className="flex justify-start items-center h-[10%] p-2 font-bold border-4 border-indigo-400 bg-indigo-300">
                <h3 className="flex justify-center items-center w-[45%] h-[85%] text-2xl rounded-l-xl bg-lavender">
                  Mis Productos:
                </h3>

                <span className="flex justify-center items-center rounded-r-2xl w-[18%] h-[85%] text-center text-xl text-black bg-white">
                  {cartTotalUnits}
                </span>

                {/* botón cerrar del cart desplegado  bg-slate-200*/}
                <button
                  className="w-[8%] h-[5%] p-1 rounded-xl bg-bpink hover:bg-pink flex items-center justify-center absolute right-[5%]"
                  onClick={closeCart}
                >
                  <i class="fa-solid fa-xmark fa-xl"></i>
                </button>
              </div>

              {/* LISTADO DE PRODUCTOS EN EL CARRITO DESPLEGADO */}
              <div className="flex justify-between h-[70%] p-5 border-x-4 border-indigo-200 overflow-auto">
                <ul className="my-1 w-full divide-y-4 divide-gray-200">
                  {renderCartProducts(cartTotalUnits)}
                </ul>
              </div>

              {/* FOOTER DEL CARRITO DESPLEGADO */}
              <div className="flex flex-col h-[25%] justify- p-4 bg-indigo-300 border-4 border-indigo-400">
                <div className="flex h-[25%] justify-between items-center font-bold text-2xl bg-lavender rounded-xl pl-[10%]">
                  {" "}
                  TOTAL:{" "}
                  <span className="flex justify-center items-center rounded-r-xl w-3/5 h-full text-center text-2xl text-black bg-white">
                    S/.{cartTotalPrice.toString().concat("0")}
                  </span>
                </div>

                <div className="font-bold">
                  <Wallet
                    initialization={{
                      preferenceId:
                        "1146510377-7ce92a1d-61a2-482c-9586-6d02740b0888",
                    }}
                    customization={customization}
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>
    </>
  );
}
