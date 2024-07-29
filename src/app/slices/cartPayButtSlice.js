// Variable que almacena el color del botón pagar en el carrito de compras
import { createSlice } from "@reduxjs/toolkit";

const cartPayButtSlice = createSlice({
  name: "cartPayButtSlice",
  initialState: {
    buttonColor: " bg-lavender", // No quitar espacio del inicio
    borderColor: " ", // No quitar el espacio al inicio
    hoverFormat: " hover:border-4 hover:border-indigo-500 hover:duration-200 hover:text-2xl",
  },
});

export const cartPayButtSliceReducer = cartPayButtSlice.reducer;