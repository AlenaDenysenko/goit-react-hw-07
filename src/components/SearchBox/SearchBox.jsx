import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      className={styles.input}
      onChange={handleFilterChange}
      placeholder="Search contacts..."
    />
  );
};

export default SearchBox;
