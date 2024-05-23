// index.js

// Importuje główny komponent aplikacji
import { App } from 'components/App';
// Importuje bibliotekę React
import React from 'react';
// Importuje metodę ReactDOM do renderowania komponentów
import ReactDOM from 'react-dom/client';
// Importuje komponent Provider z biblioteki react-redux,
// który umożliwia przekazywanie store Redux do wszystkich komponentów
import { Provider } from 'react-redux';
// Importuje plik stylów CSS
import './index.css';
// Importuje store Redux zdefiniowany w pliku store.js
import { store } from './redux/store';

// Tworzy root elementu DOM, w którym zostanie wyrenderowana aplikacja React
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode to narzędzie do wykrywania potencjalnych problemów w aplikacji
  <React.StrictMode>
    {/* Provider - komponent, który przekazuje store Redux do wszystkich komponentów,
    które będą korzystać z danych ze store */}
    <Provider store={store}>
      {/* Renderuje główny komponent aplikacji App */}
      <App />
    </Provider>
  </React.StrictMode>
);
