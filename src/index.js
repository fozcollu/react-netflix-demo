import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import { GlobalStyles } from './global-styles';
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
