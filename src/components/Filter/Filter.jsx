// Filter.jsx

// Importuje useDispatch i useSelector z react-redux
import { useDispatch, useSelector } from 'react-redux'; // dla dostępu do store

// Importuje akcję setFilter z filterSlice w redux
import { setFilter } from '../../redux/filterSlice';

// Importuje selektor selectFilter z pliku selectors w redux
import { selectFilter } from '../../redux/selectors';

// Importuje stylizowane komponenty Input i Label z pliku Filter.styled
import { Input, Label } from './Filter.styled';

// Definiuje i eksportuje komponent Filter
export const Filter = () => {
  const dispatch = useDispatch(); // Hook do wysyłania akcji
  const filter = useSelector(selectFilter); // Pobiera aktualną wartość filtra ze stanu

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter} // Ustawia wartość inputa na wartość filtra ze stanu
        onChange={event => dispatch(setFilter(event.target.value.trim()))} // Wysyła akcję ustawienia filtra przy każdej zmianie wartości inputa
      />
    </Label>
  );
};
