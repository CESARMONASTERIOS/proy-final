import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Principal from './Principal';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Principal />
  </React.StrictMode>
);
