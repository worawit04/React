import React, {Component} from 'react'; 
import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Cardlist from './Cardlist'

class  Dashboard extends Component { 
  constructor(){
      super()
      this.state = {
        news: []
      }
    }
  componentDidMount(){
      const userId = JSON.parse(localStorage.getItem("userId"))
      fetch(`https://agile-cliffs-83142.herokuapp.com/api/user/${userId}/news`)
      .then(response => response.json())
      .then(newtest => { this.setState({news: newtest})}); // news Setstate เพื่อเอา  News เท่ากับ APIชื่อ newtest
  }
  render(){
    return ( 
      <div>
        <Navbar/>    
          <div className ="Container">
            <Cardlist addnews = {this.state.news}/> 
              {/* เอาค่าจาก State คือ News ส่งไปใน Cardlist โดยชื่อว่า addnews */}
          </div>
        <Footer/>      
      </div>
    )
  }
}
export default Dashboard;
