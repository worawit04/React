import React, { Component } from 'react';
import Showdetail from './Showdetail';
import Navbar from './Navbar';
import Footer from './Footer';

class Detail extends Component{
    constructor(props){
        super(props) 
        this.state = {
            news: []
        }
    }

    componentDidMount(){
        const {match: {params} } = this.props
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then(response => response.json())
        .then(newtest => { this.setState({news: newtest})});
    }

    render() {
        return (
            <div>
            <Navbar/>    
             <div className ="container">        
               <Showdetail show = {this.state.news}/>
              </div>
            <Footer/>      
        </div>

        )

    }


} 
export default Detail;