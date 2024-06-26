import ReactDOM from 'react-dom/client'; // Використовуйте 'react-dom/client' замість 'react-dom'
import { Provider } from 'react-redux';
import store from './redux/store'; // Шлях до вашого store
import App from './App';
import './index.css'; // Ваш файл стилів

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
