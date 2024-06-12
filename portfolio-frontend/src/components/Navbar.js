// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About Me</NavLink>
            <NavLink to="/awards" activeClassName="active">Awards</NavLink>
            <NavLink to="/books" activeClassName="active">Books</NavLink>
            <NavLink to="/conferences" activeClassName="active">Conferences</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to="/education" activeClassName="active">Education</NavLink>
            <NavLink to="/experience" activeClassName="active">Experience</NavLink>
            <NavLink to="/patents" activeClassName="active">Patents</NavLink>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
            <NavLink to="/publications" activeClassName="active">Publications</NavLink>
            <NavLink to="/skills" activeClassName="active">Skills</NavLink>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
        </nav>
    );
};

export default Navbar;
