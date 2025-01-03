import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import UserPopup from "../Popups/UserPopup";
import { MdOutlineGridView } from "react-icons/md";
import Sidebar from "../Bars/Sidebar";
import Shopbar from "../Bars/Shopbar";
import Searchbar from "../Bars/Searchbar";
import '../../assets/styles/Header.css';
import Cartbar from "../Bars/Cartbar";
import { Link, useLocation } from "react-router-dom";
import HomeSection from "../HoverComponent/HomeSection";
import ShopSection from "../HoverComponent/ShopSection";
import ProductSection from "../HoverComponent/ProductSection";
import PagesSection from "../HoverComponent/PagesSection";
import BlogSection from "../HoverComponent/BlogSection";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isShopbarOpen, setShopbarOpen] = useState(false);
  const [isSearchbarOpen, setSearchbarOpen] = useState(false);
  const [isCartbarOpen, setCartbarOpen] = useState(false);

  const [showHoverSection, setShowHoverSection] = useState({});

  const handleMouseEnter = () => {
    setShowHoverSection(true);
  };

  const handleMouseLeave = () => {
    setShowHoverSection(false);
  };

  const location = useLocation();

  // Check if the current route is HomeScreen
  const isHomeScreen = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };
  const toggleShopbar = () => {
    setShopbarOpen(!isShopbarOpen); // Toggle shopbar state
  };
  const toggleSearchbar = () => {
    setSearchbarOpen(!isSearchbarOpen); // Toggle searchbar state
  };
  const toggleCartbar = () => {
    setCartbarOpen(!isCartbarOpen); // Toggle searchbar state
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg py-3 ${isScrolled ? "navbar-scrolled" : ""
          } ${isHomeScreen ? 'position-fixed' : isScrolled ? 'position-fixed' : 'position-relative'}`}
      >
        <div className="container-xl pe-4 pe-lg-auto">
          {/* Toggle Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            style={{ border: "none" }}
            onClick={toggleSidebar} // Call toggleSidebar when clicked
          >
            <img
              src="/project_1/IMAGES/776658c2-445c-4c8e-ae48-6fa5d370d053.svg"
              alt=""
            />
          </button>

          {/* Logo */}
          <Link
            to={"/"} className="navbar-brand fw-bold fs-3" href="#">
            <img src="/project_1/IMAGES/logo.svg" alt="" />
          </Link>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4">
              <li
                className="nav-item "
                onMouseEnter={() => setShowHoverSection({ ...showHoverSection, "Home": true })}
                onMouseLeave={() => setShowHoverSection({ ...showHoverSection, "Home": false })}

              >
                <a className={`nav-link`} href="#" >Home <span>&#9662;</span></a>
                <div className={`hover-section-container-home ${showHoverSection["Home"] ? 'opacity-100' : ''}`}>
                  <HomeSection />
                </div>
              </li>
              <li className="nav-item"
                onMouseEnter={() => setShowHoverSection({ ...showHoverSection, "Shop": true })}
                onMouseLeave={() => setShowHoverSection({ ...showHoverSection, "Shop": false })}>
                <a className="nav-link" href="#">
                  Shop <span>&#9662;</span>
                </a>
                <div className={`hover-section-container-shop ${showHoverSection["Shop"] ? 'opacity-100' : ''}`}>
                  <ShopSection />
                </div>
              </li>
              <li className="nav-item"
                onMouseEnter={() => setShowHoverSection({ ...showHoverSection, "Product": true })}
                onMouseLeave={() => setShowHoverSection({ ...showHoverSection, "Product": false })}>
                <a className="nav-link" href="#">
                  Products <span>&#9662;</span>
                </a>
                <div className={`hover-section-container-product ${showHoverSection["Product"] ? 'opacity-100' : ''}`}>
                  <ProductSection />
                </div>
              </li>
              <li className="nav-item"
                onMouseEnter={() => setShowHoverSection({ ...showHoverSection, "Pages": true })}
                onMouseLeave={() => setShowHoverSection({ ...showHoverSection, "Pages": false })}>
                <a className="nav-link" href="#">
                  Pages <span>&#9662;</span>
                </a>
                {showHoverSection["Pages"] && (
                  <div className="hover-section-container-pages">
                    <PagesSection />
                  </div>
                )}
              </li>
              <li className="nav-item"
                onMouseEnter={() => setShowHoverSection({ ...showHoverSection, "Blog": true })}
                onMouseLeave={() => setShowHoverSection({ ...showHoverSection, "Blog": false })}>
                <a className="nav-link" href="#">
                  Blog <span>&#9662;</span>
                </a>
                {showHoverSection["Blog"] && (
                  <div className="hover-section-container-blog">
                    <BlogSection />
                  </div>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Buy now
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="text-dark" onClick={toggleSearchbar}>
              <IoSearch size={20} />
            </a>
            <a
              href="#"
              className="text-dark d-none d-md-block"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              <FiUser size={20} />
            </a>
            <Link to="/wishlist" className="text-dark position-relative d-none d-md-block" >
              <FaRegHeart size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </Link>
            <a href="#" className="text-dark position-relative" onClick={toggleCartbar}>
              <FiShoppingCart size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Menu Bar for Mobile */}
      <div className="d-lg-none fixed-bottom bg-white border-top py-3">
        <div className="d-flex justify-content-around align-items-center">
          <a href="#" className="text-dark text-center text-decoration-none" onClick={toggleShopbar} >
            <MdOutlineGridView size={24} />
            <p className="small m-0">Shop</p>
          </a>
          <a href="#" className="text-dark text-center text-decoration-none" onClick={toggleSearchbar}>
            <IoSearch size={24} />
            <p className="small m-0">Search</p>
          </a>
          <a
            href="#"
            className="text-dark text-center text-decoration-none"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            <FiUser size={24} />
            <p className="small m-0">Account</p>
          </a>
          <Link to="/wishlist" className="text-dark position-relative text-center text-decoration-none">
            <FaRegHeart size={24} />
            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
              10
            </span>
            <p className="small m-0">Wishlist</p>
          </Link>
          <a href="#" className="text-dark position-relative text-center text-decoration-none" onClick={toggleCartbar}>
            <FiShoppingCart size={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              1
            </span>
            <p className="small m-0">Cart</p>
          </a>
        </div>
      </div>

      <UserPopup />
      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Shopbar Component */}
      <Shopbar isShopbarOpen={isShopbarOpen} toggleShopbar={toggleShopbar} />
      {/* Searchbar Component */}
      <Searchbar isSearchbarOpen={isSearchbarOpen} toggleSearchbar={toggleSearchbar} />
      {/* Cartbar Component */}
      <Cartbar isCartbarOpen={isCartbarOpen} toggleCartbar={toggleCartbar} />
    </>
  );
};

export default Navbar;
