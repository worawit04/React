import React, {Component} from 'react';
import '../App.css';
import logo from './logo.png';
import Navbarmenu from './Navbarmenu';

class Navbar extends Component{
    render(){
        return(
        <div>
            <nav className="bg-black1 flex justify-between bb b--white-10">
                <a className="link white-70 hover-white no-underline flex items-center pa3" href="/">
                    <img alt="Photo" src={ logo } width = '40px' /> 
                </a>
                <Navbarmenu/>
            </nav>
        </div>
        )
    }
}
export default Navbar;