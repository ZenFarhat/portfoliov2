import React, { useState } from "react";
import "./Nav.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";

function Nav() {
  return (
    <nav>
      <NavLink
        className='link'
        activeClassName='nav__selected'
        to='/'
        exact={true}
      >
        <HomeOutlinedIcon fontSize='large' className='nav-icon' />
      </NavLink>
      <NavLink className='link' activeClassName='nav__selected' to='/projects'>
        <CodeOutlinedIcon fontSize='large' className='nav-icon' />
      </NavLink>
      <NavLink className='link' activeClassName='nav__selected' to='/skills'>
        <BuildOutlinedIcon fontSize='large' className='nav-icon' />
      </NavLink>
      <NavLink className='link' activeClassName='nav__selected' to='/about'>
        <AccountCircleOutlinedIcon fontSize='large' className='nav-icon' />
      </NavLink>
      <NavLink className='link' activeClassName='nav__selected' to='/contact'>
        <ContactMailOutlinedIcon fontSize='large' className='nav-icon' />
      </NavLink>
    </nav>
  );
}

export default Nav;
