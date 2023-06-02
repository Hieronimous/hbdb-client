import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthWrapper } from './contexts/auth.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <AuthWrapper>
      <Router>
        <App />
      </Router>
    </AuthWrapper>
  </React.StrictMode>
);
