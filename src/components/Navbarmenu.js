import React, {Component} from 'react';


class Navbarmenu extends Component{
    constructor(props){
        super(props);
        this.isLogout = this.isLogout.bind(this);
    }
      isLogout(){
        localStorage.clear()
        window.location.href = "/";
    }

    render(){
        if(localStorage.getItem("userId")){
            return(
                <div className="flex-grow pa3 flex items-center">
                <a className="f6 link dib white dim mr3 mr4-ns" href="/">Home</a>
                <a className="f6 link dib white dim mr3 mr4-ns" href="/addnews">Addnews</a>
                <a className="f6 link dib white dim mr3 mr4-ns" href="/dashboard">Dashboard</a>
                <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" onClick={this.isLogout}>Logout</a>
                
            </div>
            )
        }else{
            return(
                <div className="flex-grow pa3 flex items-center">
                <a className="f6 link dib white dim mr3 mr4-ns" href="/login">Login</a>
                <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="/register">Register</a>
            </div>
            )
          }
        }
    }
export default Navbarmenu;