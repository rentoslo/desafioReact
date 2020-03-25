import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'

// routes
import Routes from './routes';
// css
import './App.css';

// store
import configureStore from './store/configureStore'
const { persistor, store } = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
