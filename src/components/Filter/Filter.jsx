import { useDispatch, useSelector } from 'react-redux'; // доступ до store
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch(); // для діспатча екшенів
  const filter = useSelector(selectFilter); // витягуємо зі стору

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))} // діспатчимо екшен
      />
    </Label>
  );
};

// Діма Берестень
