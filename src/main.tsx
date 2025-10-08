import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/AuthProvider';
import App from './rout/App';
import './style/index.css'
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <Provider store={store }>
        <App />
      </Provider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
