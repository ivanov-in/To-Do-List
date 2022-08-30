import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainLayout } from './layouts/MainLayout';
import { MainPage } from './pages/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayout>
      <MainPage />
    </MainLayout>
  </React.StrictMode>
);
