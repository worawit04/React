import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {BrowserRouter}  from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { BrowserRouter as Router, Route} from "react-router-dom";
import Detail from  './components/Detail';

ReactDOM.render( 
        <Router>
            <div>
                <Route exact path="/" component={App}></Route>
                <Route path="/detail/:postId" component={Detail}></Route>
            </div>   
        </Router>
     , document.getElementById('root'));
registerServiceWorker();
