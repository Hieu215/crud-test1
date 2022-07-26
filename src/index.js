import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import GlobalStyles from '~/components/GlobalStyle';
import configureStore from '~/store';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStyles>
  </React.StrictMode>,
);

reportWebVitals();
