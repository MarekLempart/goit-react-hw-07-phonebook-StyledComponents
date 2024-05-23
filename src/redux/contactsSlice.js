// contactsSlice.js

// Importuje funkcję createSlice z @reduxjs/toolkit
import { createSlice } from '@reduxjs/toolkit';

// Importuje operacje asynchroniczne: fetchContacts, addContact i deleteContact
import { addContact, deleteContact, fetchContacts } from './operations';

// Definiuje początkowy stan
const initialState = {
  items: [], // Tablica przechowująca kontakty
  isLoading: false, // Flaga ładowania
  error: null, // Przechowuje ewentualny błąd
};

// Funkcja pomocnicza do obsługi stanu w trakcie trwania operacji
const handlePending = state => {
  return {
    ...state,
    isLoading: true, // Ustawia isLoading na true
  };
};

// Funkcja pomocnicza do obsługi stanu, gdy operacja zakończyła się błędem
const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false, // Ustawia isLoading na false
    error: action.payload, // Ustawia error na payload akcji
  };
};

// Funkcja pomocnicza do obsługi stanu po pomyślnym pobraniu kontaktów
const handleFetchContactsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload }; // Ustawia stan na pomyślnie pobrane kontakty
};

// Funkcja pomocnicza do obsługi stanu po pomyślnym dodaniu kontaktu
const handleAddContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items], // Dodaje nowy kontakt do listy kontaktów
  };
};

// Funkcja pomocnicza do obsługi stanu po pomyślnym usunięciu kontaktu
const handleDeleteContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id), // Usuwa kontakt z listy kontaktów
  };
};

// Tworzy slice dla kontaktów za pomocą createSlice
const contactsSlice = createSlice({
  name: 'contacts', // Nazwa slice'a
  initialState, // Początkowy stan
  extraReducers: {
    // Obsługuje akcje pending, rejected i fulfilled dla operacji asynchronicznych
    [fetchContacts.pending]: handlePending, // Obsługa pending dla fetchContacts
    [addContact.pending]: handlePending, // Obsługa pending dla addContact
    [deleteContact.pending]: handlePending, // Obsługa pending dla deleteContact
    [fetchContacts.rejected]: handleRejected, // Obsługa rejected dla fetchContacts
    [addContact.rejected]: handleRejected, // Obsługa rejected dla addContact
    [deleteContact.rejected]: handleRejected, // Obsługa rejected dla deleteContact
    [fetchContacts.fulfilled]: handleFetchContactsSuccess, // Obsługa fulfilled dla fetchContacts
    [addContact.fulfilled]: handleAddContactSuccess, // Obsługa fulfilled dla addContact
    [deleteContact.fulfilled]: handleDeleteContactSuccess, // Obsługa fulfilled dla deleteContact
  },
});

// Eksportuje reducer dla kontaktów
export const contactsReducer = contactsSlice.reducer;
