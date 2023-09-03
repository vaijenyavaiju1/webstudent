import './App.css';
import {Component} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Arrival from './components/Arrival'
import ImageCom from './components/ImageCom';
import Explorer from './components/Explorer';
import BookNow from './components/BookNow';
import Testimonial from './components/Testimonial';
import Student from './components/Student';

class App extends Component{
  render(){
  return(
    <div>
    <Header/>
    <Home/>
    <Arrival/>
    <ImageCom/>
    <Explorer/>
    <BookNow/>
    <Testimonial/>
    <Student/>
    </div>
  )
  }
}

export default App;