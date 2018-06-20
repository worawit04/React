import React ,{ Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
class Edit extends Component {
    constructor(){
        super()
        this.state = {
          id: '',
          title: '',
          detail:''
        }
        this.onChangetitle = this.onChangetitle.bind(this)
        this.onChangedetail = this.onChangedetail.bind(this)
        this.onSave = this.onSave.bind(this)
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
      .then(json => console.log(json))

    }
    render(){
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
                            <a className="ui red button">CANCEL</a>
                            <a className="ui green button" onClick= {this.onSave}>SAVE</a>
                        </div> 
                    </form>
               </div>
               <Footer/> 
            </div>
        )
    }
}
  
export default Edit;