// filterSlice.js

// Importuje funkcję createSlice z @reduxjs/toolkit
import { createSlice } from '@reduxjs/toolkit'; // To zastępuje całą pracę z actionTypes, actionCreator i reducerami

// Tworzy slice dla filtru za pomocą createSlice
const filterSlice = createSlice({
  name: 'filter', // Nazwa slice'a
  initialState: '', // Początkowy stan - pusty string
  reducers: {
    // Definiuje reducer dla ustawienia filtru
    setFilter: (state, action) => {
      return action.payload; // Zwraca payload akcji jako nowy stan
    },
  },
});

// Eksportuje akcję setFilter wygenerowaną przez createSlice
export const { setFilter } = filterSlice.actions;

// Eksportuje reducer wygenerowany przez createSlice
export const filterReducer = filterSlice.reducer;
