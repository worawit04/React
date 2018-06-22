import React ,{ Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from 'react-responsive-modal';
class Edit extends Component {
    constructor(){
        super()
        this.state = {
          id: '',
          title: '',
          detail:'',
          openConfirmModal: false,
          openAlertModal: false,
          confirmText: '',
          alerText: ''
        }
        this.onChangetitle = this.onChangetitle.bind(this)
        this.onChangedetail = this.onChangedetail.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
        this.onCloseConfirmModal = this.onCloseConfirmModal.bind(this);
        this.onOpenAlert = this.onOpenAlert.bind(this);
        this.onCloseAlert = this.onCloseAlert.bind(this);
    }
    onOpenConfirmModal(){
        this.setState({ openConfirmModal: true, confirmText: 'You want to Change ?' });
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
    componentDidMount(){
        const {match: {params} } = this.props
        fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${params.postId}`)
        .then(response => response.json())
        .then(newtest => { this.setState({ id:newtest[0].id,title:newtest[0].title, detail:newtest[0].detail})});
    }
    onChangetitle(event){
        this.setState({title: event.target.value})
    }
    onChangedetail(event){
        this.setState({detail: event.target.value})    
    }
    onSave(){
        var data =  new FormData(document.querySelector('form'));
        fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${this.state.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: data.get('title'),
          detail: data.get('detail'),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
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
        return(
            <div>
                <Navbar/> 
                 <div className="min-height">   
                    <form className="ui form" >
                        <h1>Add News</h1>
                        <div className="field">
                            <label>Title</label>
                            <input type="text" name="title" id="title" placeholder="Title" value={this.state.title} onChange={this.onChangetitle}/>
                        </div>
                        <div className="field">
                            <label>Detail</label>
                            <textarea rows="4" name="detail"  id ="detail" placeholder="Detail" value={this.state.detail} onChange={this.onChangedetail}></textarea>
                        </div>
                        <div className="buttonform addnews">
                            <a className="ui green button" onClick= {this.onOpenConfirmModal}>SAVE</a>
                            <a className="ui red button">CANCEL</a>
                        </div> 
                    </form>
               </div>
               <Footer/> 
               <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center>
                    <h2>Confirm</h2>
                    <p>{confirmText}</p>
                    <button className="ui green button" onClick={this.onSave}>
                        Yes
                    </button>
                </Modal>
                <Modal open={openAlertModal} onClose={this.onCloseAlert} center>
                    <h2>Alert</h2>
                    <div className="fixed-modal">
                        <p>{alerText}</p>
                    </div>
                </Modal>
            </div>
        )
    }
}
  
export default Edit;