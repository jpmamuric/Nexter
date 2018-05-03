import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css';
import App from './react/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
