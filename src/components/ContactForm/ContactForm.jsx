// ContactForm.jsx

// Importuje nanoid z biblioteki nanoid do generowania unikalnych identyfikatorów
import { nanoid } from 'nanoid';
// Importuje useDispatch i useSelector z react-redux do uzyskiwania dostępu do stanu i wysyłania akcji
import { useDispatch, useSelector } from 'react-redux';
// Importuje toast z react-toastify do wyświetlania powiadomień
import { toast } from 'react-toastify';
// Importuje akcję addContact z pliku operations w redux
import { addContact } from '../../redux/operations';
// Importuje selektor selectContacts z pliku selectors w redux
import { selectContacts } from '../../redux/selectors';
// Importuje stylizowane komponenty Form, Input, Label i SubmitButton z pliku ContactForm.styled
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';

// Definiuje komponent ContactForm
export const ContactForm = () => {
  const dispatch = useDispatch(); // Hook useDispatch do wysyłania akcji
  const contacts = useSelector(selectContacts); // Hook useSelector do pobierania kontaktów ze stanu

  // Funkcja obsługująca zdarzenie submit formularza
  const handleSubmit = event => {
    event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki

    // Tworzy nowy kontakt z unikalnym ID, nazwą i numerem telefonu
    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    // Sprawdza, czy kontakt o takiej samej nazwie już istnieje
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    // Jeśli kontakt już istnieje, wyświetla ostrzeżenie
    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }

    // Wysyła akcję dodania kontaktu
    dispatch(addContact(contact));
    event.currentTarget.reset(); // Resetuje formularz
  };

  return (
    // Formularz z obsługą zdarzenia submit
    <Form onSubmit={handleSubmit}>
      {' '}
      {/* Formularz do wprowadzania danych */}
      <Label htmlFor={nanoid()}>
        Name
        {/* Pole tekstowe do wprowadzania nazwy */}
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          required
        />
      </Label>
      <Label htmlFor={nanoid()}>
        Number
        {/* Pole tekstowe do wprowadzania numeru telefonu */}
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()}
          required
        />
      </Label>
      {/* Przycisk do wysłania formularza */}
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
