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
        fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${params.postId}`)
        .then(response => response.json())
        .then(newtest => { this.setState({news: newtest[0]})});
    }
    render() {
        return (
            <div>
                <Navbar/>    
                    <div className ="Container">        
                        <Showdetail show = {this.state.news}/>
                    </div>
                <Footer/>      
            </div>
        )
    }
} 
export default Detail;