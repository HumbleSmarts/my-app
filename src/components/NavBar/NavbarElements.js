import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
align-items: center;
color: white;
background: #333;
height: 45px;
display: flex;
justify-content: space-between;
padding: 10px;
z-index: 12;
position: sticky;
top: 0;
z-index: 40; /* Adjust this value as needed */
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
list-style: none;
margin: 0;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #4d4dff;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 2px;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 4px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 458px) {
	display: none;
}
`;
