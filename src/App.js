import React from 'react';
// import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './components/Pages/index';
import AboutMe from './components/Pages/AboutMe';
import Blogs from './components/Pages/Blog';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';




function App() {
// 	const [load, upadateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/'  element={<Home />} />
				<Route path='/AboutMe' element={<AboutMe />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/Portfolio' element={<Portfolio />} />
			</Routes>
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
