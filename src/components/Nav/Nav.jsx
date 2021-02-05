import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";

function Nav() {
  return (
    <nav>
      <Link className='link' to='/'>
        <HomeOutlinedIcon fontSize='large' className='nav-icon' />
      </Link>
      <Link className='link' to='/about'>
        <AccountCircleOutlinedIcon fontSize='large' className='nav-icon' />
      </Link>
      <Link className='link' to='/skills'>
        <BuildOutlinedIcon fontSize='large' className='nav-icon' />
      </Link>
      <Link className='link' to='/projects'>
        <CodeOutlinedIcon fontSize='large' className='nav-icon' />
      </Link>
      <Link className='link' to='/contact'>
        <ContactMailOutlinedIcon fontSize='large' className='nav-icon' />
      </Link>
    </nav>
  );
}

export default Nav;
