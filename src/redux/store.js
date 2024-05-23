// store.js

// Importujemy funkcję configureStore z @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importujemy reducer dla kontaktów z pliku contactsSlice.js
import { contactsReducer } from './contactsSlice';
// Importujemy reducer dla filtra z pliku filterSlice.js
import { filterReducer } from './filterSlice';

// Konfigurujemy i tworzymy magazyn Redux za pomocą funkcji configureStore
export const store = configureStore({
  // Obiekt reducer zawiera wszystkie zdefiniowane reduktory w aplikacji
  reducer: {
    contacts: contactsReducer, // Reduktor dla zarządzania kontaktami
    filter: filterReducer, // Reduktor dla zarządzania filtrem
  },
});
