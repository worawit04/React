import React,{ Component } from 'react';
import App from '../App';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Detail from  './Detail';
import Register from './Register';
import Addnews from './Addnews';
import Login from './Login';
import Dashboard from './Dashboard';
import Edit from './Edit';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem("userId")
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )

class Root extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/detail/:postId" component={Detail}></Route>
                    <Route path="/register" component={Register}></Route>
                    <PrivateRoute path="/addnews" component={Addnews}/>
                    <Route path="/login" component={Login}></Route>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <PrivateRoute path="/edit/:postId" component={Edit} />
                </div>   
            </Router>
        )
    }
}

export default Root;