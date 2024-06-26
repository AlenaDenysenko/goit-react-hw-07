import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsSlice';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;

