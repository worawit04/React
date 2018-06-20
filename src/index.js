import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {BrowserRouter}  from 'react-router-dom';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 


// import 'semantic-ui-css/semantic.min.css';

ReactDOM.render( 
        <Root/>
     , document.getElementById('root'));
registerServiceWorker();
