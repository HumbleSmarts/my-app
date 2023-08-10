import React from 'react';
// import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './components/Pages/index';
import AboutMe from './components/Pages/AboutMe';
import Blogs from './components/Pages/Blog';
import Resume from './components/Pages/Resume';
import Contact from './components/Pages/Contact';
import Project from './components/Pages/Project';
import Footer from './components/Pages/Footer';




function App() {
	

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/'  element={<Home />} />
				<Route path='/AboutMe' element={<AboutMe />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/Resume' element={<Resume />} />
				<Route path='/Project' element={<Project />} />
			</Routes>
			<Footer/>
		</Router>
		
		

	);
}

export default App;





// import React, {Component} from 'react'
// import './App.css';
// //import Greet from './components/Greet';
// //import FunctionClick from './components/FunctionClick';
// //import ClassClick from './components/ClassClick';
// // import EventBind from './components/EventBind';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

// import Headers from './components/NavBar/Header';
// import Footer from './components/Pages/Footer';
// import HeroSection from './components/Pages/HeroSection';


// class App extends Component{
//   render(){
//     return(
//       <div className='main'>
//         < Headers/>
//         < HeroSection/>
//         < Footer/>
//        {/* <FunctionClick /> */} 
//        {/* <ClassClick /> */}
//         {/* <EventBind /> */}

//       </div>
      
      
//     )
//   }



// }



// //function App() {
//  // return (
//    // <div className="App">
//      // <header className="App-header">
//        // <Greet />
//    //     <FunctionClick />
//      // </header>
//    // </div>
//  // );
// //}

// export default App;
