import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: import.meta.env.VITE_PUBLIC_SENTRY_DSN,
  environment: import.meta.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'frontend',
      projectId: import.meta.env.VITE_PUBLIC_APP_ID,
    },
  },
});

// Umami Analytics
if (import.meta.env.VITE_PUBLIC_APP_ENV !== 'development') {
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cloud.umami.is/script.js';
  script.setAttribute('data-website-id', import.meta.env.VITE_PUBLIC_UMAMI_WEBSITE_ID);
  document.head.appendChild(script);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);