// operations.js

// Importujemy axios, aby móc wykonywać żądania HTTP
import axios from 'axios';
// Importujemy createAsyncThunk z @reduxjs/toolkit, aby tworzyć asynchroniczne akcje
import { createAsyncThunk } from '@reduxjs/toolkit';

// Ustawiamy bazowy URL dla wszystkich żądań axios
axios.defaults.baseURL = 'https://664f3485fafad45dfae2ccde.mockapi.io'; // osobisty mock-serwer

// Definiujemy asynchroniczną akcję do pobierania kontaktów
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', // Nazwa akcji
  async (_, thunkAPI) => {
    // Funkcja asynchroniczna, która wykonuje żądanie
    try {
      const response = await axios.get('/contacts'); // Wysyłamy GET żądanie do endpointu /contacts
      return response.data; // Zwracamy dane odpowiedzi jako payload akcji
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // W przypadku błędu zwracamy błąd jako payload akcji
    }
  }
);

// Definiujemy asynchroniczną akcję do dodawania kontaktu
export const addContact = createAsyncThunk(
  'contacts/addContact', // Nazwa akcji
  async (contact, thunkAPI) => {
    // Funkcja asynchroniczna, która wykonuje żądanie
    try {
      const response = await axios.post('/contacts', contact); // Wysyłamy POST żądanie do endpointu /contacts z danymi nowego kontaktu
      return response.data; // Zwracamy dane odpowiedzi jako payload akcji
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // W przypadku błędu zwracamy błąd jako payload akcji
    }
  }
);

// Definiujemy asynchroniczną akcję do usuwania kontaktu
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', // Nazwa akcji
  async (contactId, thunkAPI) => {
    // Funkcja asynchroniczna, która wykonuje żądanie
    try {
      const response = await axios.delete(`/contacts/${contactId}`); // Wysyłamy DELETE żądanie do endpointu /contacts/:contactId, aby usunąć kontakt
      return response.data; // Zwracamy dane odpowiedzi jako payload akcji
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // W przypadku błędu zwracamy błąd jako payload akcji
    }
  }
);
