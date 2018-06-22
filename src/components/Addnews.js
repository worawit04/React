import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from 'react-responsive-modal';

class Addnews extends Component {
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
    onOpenConfirmModal(){
        this.setState({ openConfirmModal: true, confirmText: 'You want to Addnew ?' });
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
    onSubmit (event) {
        const userId = JSON.parse(localStorage.getItem("userId"))
        var data =  new FormData(document.querySelector('form'));
        fetch('https://agile-cliffs-83142.herokuapp.com/api/news', {
        method: 'POST',
        body: JSON.stringify({
          title: data.get('title'),
          detail: data.get('detail'),
          user: userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => {
            if(!json.require){
            this.setState({ openAlertModal: true, alerText: 'Success'});
            window.location.href = "/dashboard";
            }else{
            this.setState({ openAlertModal: true, alerText: '์Not Success'});
            // alert("please fill user information");
            }
        })
    }
    render(){
        const { openConfirmModal,openAlertModal,confirmText,alerText } = this.state;
        return(
            <div>
                <Navbar/> 
                 <div className="min-height">   
                    <form className="ui form" >
                        <h1>Add News</h1>
                        <div className="field">
                            <label>Title</label>
                            <input type="text" name="title" id="title" placeholder="Title"/>
                        </div>
                        <div className="field">
                            <label>Detail</label>
                            <textarea rows="4" name="detail"  id ="detail" placeholder="Detail" ></textarea>
                        </div>
                        <div className="buttonform addnews">
                            <a className="ui green button" onClick={this.onOpenConfirmModal}>SAVE</a>
                            <a className="ui red button">CANCEL</a>
                        </div> 
                    </form>
               </div>
               <Footer/>
               <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center>
                    <h2>Confirm</h2>
                    <p>{confirmText}</p>
                    <button className="ui green button" onClick={this.onSubmit}>
                        Yes
                    </button>
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
  
export default Addnews;