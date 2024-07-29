import { createSlice } from "@reduxjs/toolkit";

const formInputSlice = createSlice({
  name:"formInputSlice",
  initialState:{
    emailInput:"",
    passwordInput:"",
    password2Input:"",
    nameInput:"",
    lastNameInput:"",   
  },

  reducers:{
    getEmailInput: (state,action) => {
      // action: {type:"", payload:{}}
      state.emailInput = action.payload;
    },  

    getPasswordInput: (state,action) => {
      state.passwordInput = action.payload;
    },

    getPassword2Input: (state,action) => {
      state.password2Input = action.payload;
    },

    getNameInput: (state,action) => {
      state.nameInput = action.payload;
    },

    getLastnameInput: (state,action) => {
      state.lastNameInput = action.payload;
    },
  }
})

export const formInputSliceReducer = formInputSlice.reducer;
export const {getEmailInput, getPasswordInput, getPassword2Input,
        getNameInput, getLastnameInput} = formInputSlice.actions;