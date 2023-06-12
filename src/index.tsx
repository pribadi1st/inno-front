import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <Router>
      <Provider store={store}>
        <Navbar />
        <App />
      </Provider>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
