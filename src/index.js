import { App } from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // для того, щоб передати store всім компонентам, які будуть використовувати дані зі store
import './index.css';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider - компонент, який передає store всім компонентам, які будуть використовувати дані зі store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
