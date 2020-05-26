import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

// const element = React.createElement('a', {href: 'https://platzi.com'}, 'Hola! Soy los children')

const container = document.getElementById('app');

// recibe el que  y el donde 
ReactDOM.render(<App />, container);
// ReactDOM.render(element, container)
