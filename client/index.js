import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // import this
import App from '/components/App';

const root = createRoot(document.querySelector('#root'))
root.render(<App />,)

// ReactDOM.render(<App />, document.getElementById('root'));
