// Variable global que almacena el color de los bordes que enfatizan
// los botones al hacer hover.
import { createSlice } from "@reduxjs/toolkit";

const modBorderSlice = createSlice({
  name: "modBorderSilce",
  initialState: {
    color: " hover:border-sky-500", // No quitar el espacio al inicio
  }
}) 

export const modBorderSliceReducer = modBorderSlice.reducer;