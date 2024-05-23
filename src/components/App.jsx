// App.js

// Importuje komponent ToastContainer z biblioteki react-toastify, który jest używany do wyświetlania powiadomień
import { ToastContainer } from 'react-toastify';
// Importuje plik CSS dla stylów domyślnych z react-toastify
import 'react-toastify/dist/ReactToastify.css';
// Importuje komponent ContactForm, który jest używany do dodawania nowych kontaktów
import { ContactForm } from './ContactForm/ContactForm';
// Importuje komponent ContactList, który jest używany do wyświetlania listy kontaktów
import { ContactList } from './ContactList/ContactList';
// Importuje komponent Filter, który jest używany do filtrowania kontaktów
import { Filter } from './Filter/Filter';
// Importuje stylizowane komponenty MainHeader, SecondaryHeader i Section z pliku App.styled
import { MainHeader, SecondaryHeader, Section } from './App.styled';

// Definiuje główny komponent aplikacji
export const App = () => {
  return (
    // Komponent Section, który opakowuje całą zawartość aplikacji
    <Section>
      {/* MainHeader - główny nagłówek dla sekcji Phonebook */}
      <MainHeader>Phonebook</MainHeader>
      {/* Komponent ContactForm do dodawania nowych kontaktów */}
      <ContactForm />
      {/* SecondaryHeader - nagłówek dla sekcji Contacts */}
      <SecondaryHeader>Contacts</SecondaryHeader>
      {/* Komponent Filter do filtrowania listy kontaktów */}
      <Filter />
      {/* Komponent ContactList do wyświetlania listy kontaktów */}
      <ContactList />
      {/* Komponent ToastContainer z react-toastify, który wyświetla powiadomienia */}
      <ToastContainer position="top-center" /> {/* to jest do powiadomień */}
    </Section>
  );
};
