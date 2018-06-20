import React ,{ Component } from 'react';

class Btn extends Component{
    constructor(props){
        super(props)    
        this.state = {
           id : props.Btn_id,
           user: props.userId
        } 
        this.btn_delete = this.btn_delete.bind(this)
    }
    btn_delete(){
        fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${this.state.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log(json))
    }
    render(){

        if(JSON.parse(localStorage.getItem("userId")) === this.state.user){
        return(
            <div className="button-Dashboard">
            <a className="ui green button new" href={`/edit/${this.state.id}`}>Edit</a>
            <a className="ui red button new" onClick={ this.btn_delete }>Delete</a>
            </div> 
        )
         }else{
        return('')
      }
    }
}

export default Btn;
