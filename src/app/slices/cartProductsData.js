import { createSlice } from "@reduxjs/toolkit";

function getLocalStorageData (ind) {
  const flag1 = localStorage.getItem("cartRenderProducts");
  const flag2 = localStorage.getItem("cartRenderUnits");
  const flag3 = localStorage.getItem("cartTotalPrice");
  const flag4 = localStorage.getItem("cartTotalUnits");

  const productsArray = flag1? [...JSON.parse(flag1)] : [];
  const unitsArray = flag2? [...JSON.parse(flag2)] : [];
  const totalPrice = flag3? JSON.parse(flag3) : 0;
  const totalUnits = flag4? JSON.parse(flag4) : 0;

  switch (ind) {
    case 1:
      return productsArray; 
    case 2:
      return unitsArray;
    case 3:
      return totalPrice;
    default: 
      return totalUnits;
  }

}

const cartProductsDataSlice = createSlice({
  name:"cartProductDataSlice",
  initialState:{
    cartProductsArray:getLocalStorageData(1),
    cartUnitsArray:getLocalStorageData(2),
    cartTotalPrice:getLocalStorageData(3),
    cartTotalUnits:getLocalStorageData(4),
  },

  reducers:{
    setCartProductsArray: (state,action) => {
      // action: {type:"", payload:{}}
      state.cartProductsArray = action.payload;
    },  

    setCartUnitsArray: (state,action) => {
      state.cartUnitsArray = action.payload;
    },

    setCartTotalPrice: (state,action) => {
      const ref = action.payload;
      state.cartTotalPrice = parseFloat(ref.toFixed(2));
    },

    setCartTotalUnits: (state,action) => {
      state.cartTotalUnits = action.payload;
    }



  }
})

export const cartProductsDataSliceReducer = cartProductsDataSlice.reducer;
export const {setCartProductsArray,
              setCartUnitsArray,
              setCartTotalPrice,
              setCartTotalUnits} = cartProductsDataSlice.actions;