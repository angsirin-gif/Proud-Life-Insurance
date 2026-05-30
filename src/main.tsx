import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { ConsultationProvider } from './context/ConsultationContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ConsultationProvider>
        <App />
      </ConsultationProvider>
    </BrowserRouter>
  </StrictMode>,
);
