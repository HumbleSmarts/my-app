import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

import './../styles/css/Header.css'; // Import your CSS for styling


const Navbar = () => {
	return (
		
			<Nav className="header">
				 <div className="logo">Your Logo or Engineer's Name</div>
				<NavMenu className="nav-list">
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/AboutME" activeStyle>
						About
					</NavLink>
					<NavLink to="/Portfolio" activeStyle>
						Portfolio
					</NavLink>
					<NavLink to="/Projects" activeStyle>
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
