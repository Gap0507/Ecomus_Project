import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import '../../assets/styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Header = () => {
  return (
    <div className="header-container">
      {/* Navbar */}
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
};

export default Header;
