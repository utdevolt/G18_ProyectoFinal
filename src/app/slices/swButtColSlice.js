// Variable que almacena el color de los botones switch del modal
import { createSlice } from "@reduxjs/toolkit";

const swButtColSlice = createSlice({
  name: "swButtColSlice",
  initialState:{
    color: " bg-blue", // No quitar el espacio al inicio
  },
})

export const swButtColSliceReducer = swButtColSlice.reducer;