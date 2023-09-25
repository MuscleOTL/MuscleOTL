import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // import this
import App from './/components/App.jsx';
import { BrowserRouter } from 'react-router-dom';


const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById('root'));
