import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assest/logo.png"

const Menubar = () => {
  const menuList = <>
  <Link to="/"> Home </Link>
  <Link to="/"> About </Link>
  <Link to="/"> All Movies </Link>
  </>


    return (
        <Navbar
        fluid={true}
        rounded={true}
        className="bg-black rounded-none"
      >
        <Navbar.Brand href="/">
          <img
            src={Logo}
            // className="mr-3 h-6 sm:h-9"
            className="w-32 lg:w-40"
            alt="Flowbite Logo"
          />
        </Navbar.Brand>
        <div className="flex gap-3 md:order-2">
          <Link to="/login">
          <Button className='bg-red-600'>
            Login
            </Button>
          </Link>
          <Link to="/register">
          <Button className='bg-red-600'>
            Register
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='text-white text-2xl'>
         
         {
            menuList
         }
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Menubar;