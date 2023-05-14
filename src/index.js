import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme ={
  colors: {
    bg: '#f5f5f5',
    white: '#fff',
    text: '#2a2a2a',
    background: '#fff',
    primary: 'rgba(87, 224, 210, 0.276)',
    secondary: 'rgb(94, 84, 235)',
    accent: '#609',
    muted: '#f6f6f6',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
