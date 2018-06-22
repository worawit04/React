import React ,{ Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from 'react-responsive-modal';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            alerText: ''
          }
        this.Login = this.Login.bind(this); 
        this.onOpenAlert = this.onOpenAlert.bind(this);
        this.onCloseAlert = this.onCloseAlert.bind(this);
    }
    onOpenAlert(){
        this.setState({ open: true });
      }
    
    onCloseAlert(){
        this.setState({ open: false });
      }
    
    clickClose(){
        window.location.href = "/"
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
            this.setState({open: true, alerText: 'username or password incorrect'});
            // this.props.history.push("/");
            console.log(json);
          }
        })
      }
    render(){
        const { open } = this.state;
        return(
            <div>
                <Navbar/> 
                    <div className="min-height">
                        <div className="ui form login">
                            <form className="ui large form login" >
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
                                        <Modal open={open} onClose={this.onCloseAlert} center>
                                         <h2>Alert Warning!!</h2>
                                         <p>Please input Username and Password </p>
                                        <button className="ui yellow button"> Yes </button>
                                        </Modal>
                                </div>
                                <div className="btn-register">
                                    <div className="newuser">
                                    <p className="New_user">Register New User</p> 
                                    </div>
                                </div>
                            </form>
                        </div> 
                     </div>
               <Footer/> 
            </div>
        )
    }
}
  
export default Login;