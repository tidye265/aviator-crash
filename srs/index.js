import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import App from './app';
import { Provider } from './context';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>

        <ToastContainer
          position="top-center"
          theme="dark"
          autoClose={3000}
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
