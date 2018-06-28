import React, {Component} from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cardlist from './components/Cardlist'
import logo from './components/logo.png';
class  App extends Component { 
  constructor(){
      super()
      this.state = {
        news: []
      }
    }
  componentDidMount(){
      fetch('https://agile-cliffs-83142.herokuapp.com/api/news')
      .then(response => response.json())
      .then(newtest => { this.setState({news: newtest})}); // news Setstate เพื่อเอา  News เท่ากับ APIชื่อ newtest
  }
  render(){
    return ( 
        <div>
          <Navbar/>    
          <div className ="Container">
            <Cardlist addnews = {this.state.news}/> 
            </div>
          <Footer/>    
        </div>   
    )
  }
}
export default App;
