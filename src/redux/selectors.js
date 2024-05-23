// selectors.js

// Importujemy funkcję createSelector z @reduxjs/toolkit
import { createSelector } from '@reduxjs/toolkit';

// Definiujemy selektor, który zwraca tablicę kontaktów ze stanu
export const selectContacts = state => state.contacts.items; // tablica kontaktów
// Definiujemy selektor, który zwraca wartość filtra ze stanu
export const selectFilter = state => state.filter; // wartość filtra
// Definiujemy selektor, który zwraca wartość błędu ze stanu
export const selectError = state => state.contacts.error; // wartość błędu
// Definiujemy selektor, który zwraca informację o stanie ładowania
export const selectIsLoading = state => state.contacts.isLoading; // informacja o stanie ładowania
// Definiujemy selektor, który zwraca przefiltrowane kontakty
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter], // tablica selektorów, które będą używane jako wejście
  (contacts, filter) => {
    // dla każdego kontaktu zamieniamy jego nazwę na małe litery
    // i sprawdzamy, czy zawiera ona wartość filtra
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
