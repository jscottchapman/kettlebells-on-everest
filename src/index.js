import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget';

let buttons = document.createElement('div');
netlifyIdentity.init();
ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
