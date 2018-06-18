import React, {Component} from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cardlist from './components/Cardlist'

class  App extends Component { 
  constructor(){
      super()
      this.state = {
        news: []
      }
    }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(newtest => { this.setState({news: newtest})}); // news Setstate เพื่อเอา  News เท่ากับ APIชื่อ newtest
  }
  render(){
    return ( 
      <div>
        <Navbar/>    
         <div className ="container">
           <Cardlist addnews = {this.state.news}/> 
           {/* เอาค่าจาก Statel คือ News ส่งไปใน Cardlist โดยชื่อว่า addnews */}
          </div>
        <Footer/>      
    </div>
    )
  }
}
export default App;
