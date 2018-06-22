import React ,{ Component } from 'react';
import Modal from 'react-responsive-modal';

class Btn extends Component{
    constructor(props){
        super(props)    
        this.state = {
           id : props.Btn_id,
           user: props.userId,
           openConfirmModal: false,
           openAlertModal: false,
           confirmText: '',
           alerText: ''
        } 
        this.btn_delete = this.btn_delete.bind(this)
        this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
        this.onCloseConfirmModal = this.onCloseConfirmModal.bind(this);
        this.onOpenAlert = this.onOpenAlert.bind(this);
        this.onCloseAlert = this.onCloseAlert.bind(this);
    }

     onOpenConfirmModal(){
        this.setState({ openConfirmModal: true, confirmText: 'You want to delete news ?' });
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

    btn_delete(){
        fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${this.state.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json =>{
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
        if(JSON.parse(localStorage.getItem("userId")) === this.state.user){
        return(
            <div className="button-Dashboard">
            <a className="ui blue button new" href={`/edit/${this.state.id}`}><i className="fas fa-edit fa-sm"></i>&nbsp; Edit</a>
            <a className="ui red button new" onClick={ this.onOpenConfirmModal }><i className="fas fa-trash-alt fa-sm"></i>&nbsp;&nbsp; Delete</a>
                <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center className="modalall">
                    <h2>Confirm</h2>
                    <p>{confirmText}</p>
                    <a className="ui red button new" onClick={this.btn_delete} > Yes!!</a>
                </Modal>
                <Modal open={openAlertModal} onClose={this.onCloseAlert} center>
                    <p>Alert</p>
                    <div className="fixed-modal">
                    <p>{alerText}</p>
                    </div>
                </Modal>
            </div> 
        )
        }else{
          
        return('')
      }
    }
}

export default Btn;
