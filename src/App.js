import React, {Component} from 'react'
import './App.css';
//import Greet from './components/Greet';
//import FunctionClick from './components/FunctionClick';
//import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';

import Headers from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';


class App extends Component{
  render(){
    return(
      <div className='main'>
        < Headers/>
        < Body/>
        < Footer/>
       {/* <FunctionClick /> */} 
       {/* <ClassClick /> */}
        {/* <EventBind /> */}

      </div>
      
      
    )
  }



}



//function App() {
 // return (
   // <div className="App">
     // <header className="App-header">
       // <Greet />
   //     <FunctionClick />
     // </header>
   // </div>
 // );
//}

export default App;
