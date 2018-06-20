import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Addnews extends Component {
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
                            <input type="text" name="title" id="title" placeholder="Title"/>
                        </div>
                        <div className="field">
                            <label>Detail</label>
                            <textarea rows="4" name="detail"  id ="detail" placeholder="Detail" ></textarea>
                        </div>
                        <div className="buttonform addnews">
                            <a className="ui red button">CANCEL</a>
                            <a className="ui green button" onClick={this.onSubmit}>SAVE</a>
                        </div> 
                    </form>
               </div>
               <Footer/> 
            </div>
        )
    }
}
  
export default Addnews;