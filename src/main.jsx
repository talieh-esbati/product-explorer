import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ReduxProvider } from './providers/ReduxProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
