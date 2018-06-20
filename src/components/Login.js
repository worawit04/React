import React ,{ Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Login extends Component {

    constructor(){
        super()
        this.setState = {   
        }
    this.Login = this.Login.bind(this); 
    // this.onChange = this.onChange.bind(this); 
    }

    Login(){
        var data =  new FormData(document.querySelector('form'));
          fetch('https://agile-cliffs-83142.herokuapp.com/api/user/auth', {
          method: 'POST',
          body: JSON.stringify({
            username: data.get('username'),
            password: data.get('password'),
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json => {
          if(!json.msg){
            localStorage.setItem("userId", JSON.stringify(json.id))
            localStorage.setItem("name", JSON.stringify(json.first_name))
            localStorage.setItem("lastname", JSON.stringify(json.last_name))
            this.props.history.push("/dashboard");
    
          }else{
            alert("username or password incorrect")
            // this.props.history.push("/");
            console.log(this.props.history);
          }
        })
      }

   
    render(){
        return(
            <div>
                <Navbar/> 
                    <div className="min-height">
                        <form className="ui large form" >
                            <h1>Login</h1>
                            <div className="field">
                                <label>Username</label>
                                <input type="text" name="username" id="username" placeholder="Username" onChange={this.onChange}/>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input type="password" name="password" id="password" placeholder="Password"  onChange={this.onChange}/>
                            </div>
                            <div>
                                <a className="btn-login ui large green button" value="login" onClick={this.Login}>LOGIN</a>
                            </div>
                            <div className="btn-register">
                                <p>Register New User</p> 
                                <p>
                                 <span className="psw">Forgot <a href="#">password?</a></span>
                                </p> 
                            </div>
                        </form>
                     </div>
               <Footer/> 
            </div>
        )
    }
}
  
export default Login;