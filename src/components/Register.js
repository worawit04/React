import React, { Component }from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from 'react-responsive-modal';

class Register extends Component {
    constructor(){
        super();
        this.state = {
          openConfirmModal: false,
          openAlertModal: false,
          confirmText: '',
          alerText: ''
        }
        this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
        this.onCloseConfirmModal = this.onCloseConfirmModal.bind(this);
        this.onOpenAlert = this.onOpenAlert.bind(this);
        this.onCloseAlert = this.onCloseAlert.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit (event) {
        this.setState({ openConfirmModal: false });
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
        .then(json => {
        if(!json.require){
          this.setState({ openAlertModal: true, alerText: 'Success'});
          window.location.href = "/login";
        }else{
          this.setState({ openAlertModal: true, alerText: 'Please fill user information'});
          // alert("please fill user information");
        }
      })
    }
    onOpenConfirmModal(){
        this.setState({ openConfirmModal: true, confirmText: 'You want to register ?' });
      }
    
      onCloseConfirmModal(){
        this.setState({ openConfirmModal: false });
      }
    
      onOpenAlert(){
        this.setState({ openAlertModal: true });
      }
    
      onCloseAlert(){
        this.setState({ openAlertModal: false });
      }

    render(){
        const { openConfirmModal,openAlertModal,confirmText,alerText } = this.state;
        return(
            <div>
                <Navbar/> 
                  <div className="min-height">
                      <form className="ui form" >
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
                            <label>Username</label>
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
                        <div className="buttonform register">
                            <a className="ui green button" onClick={this.onOpenConfirmModal}>REGISTER</a>
                            <a className="ui red button">CANCEL</a>
                        </div> 
                      </form>
                   </div>
               <Footer/> 
               <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center>
                    <h2>Confirm</h2>
                    <p>{confirmText}</p>
                    <a className="ui green button" onClick={this.onSubmit}> Yes </a>
                </Modal>
                <Modal open={openAlertModal} onClose={this.onCloseAlert} center>
                    <p>Alert</p>
                    <div className="fixed-modal">
                        <p>{alerText}</p>
                    </div>
                </Modal>
            </div>
        )
    }
}
    
export default Register;