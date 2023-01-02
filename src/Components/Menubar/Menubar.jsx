import { Avatar, Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Logo from "../../assest/logo.png"
import { AuthProvider } from '../../ContextApi/ContextApi';

const Menubar = () => {
  const { user, logout } = useContext(AuthProvider)
  const handleLogout =()=>{
    logout()
    .then(()=>{
      toast.success("Logout Successfully")
    })
  }
  console.log(user)
  const menuList = <>
    <Link to="/"> Home </Link>
    <Link to="/"> About </Link>
    <Link to="/"> All Movies </Link>
  </>


  return (
    <Navbar
      className="bg-black rounded-none m-0"
      fluid={true}
      rounded={true}

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
        {
          user?.uid ? <>
          <button onClick={handleLogout} className='bg-red-700 px-4 py-2 rounded-lg text-white'> Logout</button>
          <Avatar
                  img={user?.photoURL}
                  title={user?.displayName}
                  rounded={true}
                />
          </>
          
          :
            <>
              <Link to="/login">
                <button className='bg-red-700 px-4 py-2 rounded-lg text-white'> Login</button>
              </Link>
              <Link to="/register">
                <button className='bg-red-700 px-4 py-2 rounded-lg text-white'> Register</button>
              </Link>
            </>
        }
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