import React ,{ Component }from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Register extends Component {

    onSubmit (event) {
        var data =  new FormData(document.querySelector('form'));
        fetch('https://agile-cliffs-83142.herokuapp.com/api/user', {
        method: 'POST',
        body: JSON.stringify({
          first_name: data.get('first_name'),
          last_name: data.get('last_name'),
          username: data.get('username'),
          password: data.get('password'),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
    }

    render(){
        return(
            <div>
                <Navbar/> 
                 <div>
                    <form className="ui form" onSubmit={this.handleSubmit} >
                        <h1>Register</h1>
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="first_name" id="first_name" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input type="text" name="last_name"  id ="last_name" placeholder="Last Name"/>
                        </div>
                        <div className="field">
                            <label>User</label>
                            <input type="text" name="username" id="username" placeholder="User"/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" id ="password" placeholder="Password"/>
                        </div>
                        <div className="field">
                            <label>Re Password</label>
                            <input type="password" name="repassword" id = "repassword" placeholder="Re Password"/>
                        </div>
                        <div className="buttonform">
                            <a className="ui green button" onClick={this.onSubmit} >REGISTER</a>
                            <button className="ui red button">CANCEL</button>
                        </div> 
                    </form>
               </div>
               <Footer/> 
            </div>
        )
    }

}
 
    
export default Register;