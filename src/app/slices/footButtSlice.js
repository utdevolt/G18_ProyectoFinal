// Variable que almacena el color del botón "Ingresar" en Login
// y de "Registrarme" en el Register

import { createSlice } from "@reduxjs/toolkit";

const footButtSlice = createSlice({
  name:"footButtSlice",
  initialState: {
    color: " bg-blue", // No quitar el espacio al inicio
  }
})

export const footButtSliceReducer = footButtSlice.reducer;