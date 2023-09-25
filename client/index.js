import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx' 
import styles from './static/styles.css';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);
