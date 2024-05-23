// ContactList.jsx

// Importuje hook useEffect z React
import { useEffect } from 'react';
// Importuje ikonę GrContactInfo z react-icons/gr
import { GrContactInfo } from 'react-icons/gr';
// Importuje useDispatch i useSelector z react-redux
import { useDispatch, useSelector } from 'react-redux'; // dla dostępu do store
// Importuje operacje deleteContact i fetchContacts z pliku operations w redux
import { deleteContact, fetchContacts } from '../../redux/operations'; // operacje
// Importuje selektory z pliku selectors w redux
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
// Importuje stylizowane komponenty Button, Item, List, Spinner i Text z pliku ContactList.styled
import { Button, Item, List, Spinner, Text } from './ContactList.styled';

// Definiuje i eksportuje komponent ContactList
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); // Pobiera przefiltrowane kontakty ze stanu
  const isLoading = useSelector(selectIsLoading); // Pobiera stan ładowania ze stanu
  const error = useSelector(selectError); // Pobiera błąd ze stanu
  const dispatch = useDispatch(); // Hook do wysyłania akcji

  // Hook useEffect, który jest wywoływany po zamontowaniu komponentu
  useEffect(() => {
    dispatch(fetchContacts()); // Wysyła akcję pobierania kontaktów
  }, [dispatch]);

  // Funkcja obsługująca usuwanie kontaktu
  const onDeleteContact = id => {
    dispatch(deleteContact(id)); // Wysyła akcję usunięcia kontaktu
  };

  return (
    <>
      {isLoading && <Spinner />} {/* Wyświetla spinner, jeśli trwa ładowanie */}
      {/* Wyświetla tekst "No contacts found.", jeśli nie ma kontaktów, nie ma błędu i nie trwa ładowanie */}
      {!filteredContacts?.length && !error && !isLoading && (
        <Text>No contacts found.</Text>
      )}
      {/* Wyświetla błąd, jeśli wystąpił */}
      {error && <Text>{error}</Text>}
      <List>
        {/* Iteruje przez przefiltrowane kontakty i renderuje je */}
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <GrContactInfo size={20} /> {/* Ikona kontaktu */}
            <Text>
              {name}: {phone} {/* Wyświetla nazwę i numer telefonu */}
            </Text>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete {/* Przycisk do usuwania kontaktu */}
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};
