import React from 'react';
import ReactDOM from 'react-dom/client';
import './Movie/movie.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Movie/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>  
      <AppProvider>
  <App/>
  </AppProvider> 
  {/* <App/> */}
      </React.StrictMode> 
);

reportWebVitals();
