import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import profilepicture from './../styles/image/Logo.png'; // Tell webpack this JS file uses this image
import './../styles/css/Header.css'; // Import your CSS for styling


const Navbar = () => {
	return (
		
			<Nav className="header">
				 <div className="logo"> <img src={profilepicture} alt="Software Engineer"/></div>
				<NavMenu className="nav-list">
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/AboutMe" activeStyle>
						About
					</NavLink>
					<NavLink to="/Project" activeStyle>
						Projects
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/Resume" activeStyle>
						Resume
					</NavLink>
				</NavMenu>
			</Nav>
		
	);
};

export default Navbar;
