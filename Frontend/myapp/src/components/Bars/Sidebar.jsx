import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Select from "react-select";
import { Collapse } from "react-bootstrap";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const countryOptions = [
        {
            value: "USD",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <img
                        src="https://flagcdn.com/us.svg"
                        alt="USA"
                        style={{ width: "20px", height: "15px" }}
                    />
                    USD
                </div>
            ),
        },
        {
            value: "EUR",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <img
                        src="https://flagcdn.com/eu.svg"
                        alt="EUR"
                        style={{ width: "20px", height: "15px" }}
                    />
                    EUR
                </div>
            ),
        },
        {
            value: "INR",
            label: (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <img
                        src="https://flagcdn.com/in.svg"
                        alt="India"
                        style={{ width: "20px", height: "15px" }}
                    />
                    INR
                </div>
            ),
        },
    ];

    const languageOptions = [
        { value: "en", label: "English" },
        { value: "es", label: "Español" },
        { value: "fr", label: "Français" },
    ];


    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

    const [openSections, setOpenSections] = useState({
        home: false,
        shop: false,
        products: false,
        pages: false,
        blog: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <>
            {/* Sidebar */}
            <div
                className={`offcanvas offcanvas-start ${isSidebarOpen ? "show" : ""}`}
                style={{
                    visibility: isSidebarOpen ? "visible" : "hidden",
                    zIndex: 1055,
                    width: "350px",
                    position: "fixed",
                }}
            >
                <div className="offcanvas-header pb-0">
                    <h5 className="offcanvas-title">Menu</h5>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={toggleSidebar}
                    ></button>
                </div>
                <div
                    className="offcanvas-body"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            flex: "1 1 auto",
                            overflowY: "auto",
                            paddingBottom: "125px", // Adds space above the fixed login button
                        }}>
                        {/* Main Menu Items */}
                        <ul className="list-unstyled">
                            <li className="py-3  border-bottom" data-bs-toggle="collapse"
                                data-bs-target="#homeCollapse"
                                aria-expanded="false"
                                aria-controls="homeCollapse"
                                onClick={() => toggleSection("home")}
                            >
                                <h6 className="text-decoration-none text-dark d-flex justify-content-between" style={{ fontWeight: "bold" }} >
                                    Home
                                    <span>{openSections.home ? <FaMinus /> : <FaPlus />}</span>

                                </h6>

                                <Collapse in={false} className=" ms-4 ps-3 " >
                                    <ul className="list-unstyled collapse pt-2" id="homeCollapse" style={{ borderLeft: "2px solid #ebebeb" }}>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Returns + Exchanges
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Shipping
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                FAQ's
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Compare
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                My Wishlist
                                            </a>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="py-3  border-bottom" data-bs-toggle="collapse"
                                data-bs-target="#shopCollapse"
                                aria-expanded="false"
                                aria-controls="shopCollapse"
                                onClick={() => toggleSection("shop")}>
                                <h6 className="text-decoration-none text-dark d-flex justify-content-between" style={{ fontWeight: "bold" }} >
                                    Shop
                                    <span>{openSections.shop ? <FaMinus /> : <FaPlus />}</span>

                                </h6>

                                <Collapse in={false} className=" ms-4 ps-3 " >
                                    <ul className="list-unstyled collapse pt-2" id="shopCollapse" style={{ borderLeft: "2px solid #ebebeb" }}>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Returns + Exchanges
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Shipping
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                FAQ's
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Compare
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                My Wishlist
                                            </a>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="py-3  border-bottom" data-bs-toggle="collapse"
                                data-bs-target="#productsCollapse"
                                aria-expanded="false"
                                aria-controls="productsCollapse"
                                onClick={() => toggleSection("products")}>
                                <h6 className="text-decoration-none text-dark d-flex justify-content-between" style={{ fontWeight: "bold" }} >
                                    Products
                                    <span>{openSections.products ? <FaMinus /> : <FaPlus />}</span>

                                </h6>

                                <Collapse in={false} className=" ms-4 ps-3 " >
                                    <ul className="list-unstyled collapse pt-2" id="productsCollapse" style={{ borderLeft: "2px solid #ebebeb" }}>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Returns + Exchanges
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Shipping
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                FAQ's
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Compare
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                My Wishlist
                                            </a>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="py-3  border-bottom" data-bs-toggle="collapse"
                                data-bs-target="#pagesCollapse"
                                aria-expanded="false"
                                aria-controls="pagesCollapse"
                                onClick={() => toggleSection("pages")}>
                                <h6 className="text-decoration-none text-dark d-flex justify-content-between" style={{ fontWeight: "bold" }} >
                                    Pages
                                    <span>{openSections.pages ? <FaMinus /> : <FaPlus />}</span>

                                </h6>

                                <Collapse in={false} className=" ms-4 ps-3 " >
                                    <ul className="list-unstyled collapse pt-2" id="pagesCollapse" style={{ borderLeft: "2px solid #ebebeb" }}>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Returns + Exchanges
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Shipping
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                FAQ's
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Compare
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                My Wishlist
                                            </a>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="py-3  border-bottom" data-bs-toggle="collapse"
                                data-bs-target="#blogCollapse"
                                aria-expanded="false"
                                aria-controls="blogCollapse"
                                onClick={() => toggleSection("blog")}>
                                <h6 className="text-decoration-none text-dark d-flex justify-content-between" style={{ fontWeight: "bold" }} >
                                    Blog
                                    <span>{openSections.blog ? <FaMinus /> : <FaPlus />}</span>

                                </h6>

                                <Collapse in={false} className=" ms-4 ps-3 " >
                                    <ul className="list-unstyled collapse pt-2" id="blogCollapse" style={{ borderLeft: "2px solid #ebebeb" }}>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Returns + Exchanges
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Shipping
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                FAQ's
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                Compare
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="/" className="text-dark text-decoration-none">
                                                My Wishlist
                                            </a>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="py-2">
                                <a href="#" className="text-decoration-none text-dark" style={{ fontWeight: "bold" }}>
                                    Buy Now
                                </a>
                            </li>
                        </ul>

                        {/* Utility Buttons */}
                        <div className="d-flex gap-2 mt-1">
                            <a href="#" className="btn d-flex align-items-center gap-2 p-2 px-3" style={{ backgroundColor: "#f2f2f2" }}>
                                <FaRegHeart /> <span className="text-dark">Wishlist</span>
                            </a>
                            <a href="#" className="btn d-flex align-items-center gap-2 p-2 px-3" style={{ backgroundColor: "#f2f2f2" }}>
                                <IoSearch /> <span className="text-dark">Search</span>
                            </a>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-4">
                            <span style={{ borderBottom: "1px solid black", paddingBottom: "3px" }}>Need help?</span>
                            <p className="mb-1 mt-3">
                                Address: 1234 Fashion Street, Suite 567, New York, NY 10001
                            </p>
                            <p className="mb-1">Email: info@fashionshop.com</p>
                            <p>Phone: (609) 555-1034</p>
                        </div>
                    </div>

                    {/* Fixed Login Button */}
                    <div
                        className="p-3 w-100"
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: "#fff",
                            borderTop: "1px solid #ddd",
                        }}
                    >
                        <a href="#" className="btn w-100 " style={{ backgroundColor: "#f2f2f2" }}>
                            <FiUser className="me-2" />
                            Login
                        </a>

                        <hr />

                        {/* Dropdowns */}
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", zIndex: "15" }}>
                            {/* Country Dropdown */}
                            <div>
                                <Select
                                    options={countryOptions}
                                    value={selectedCountry}
                                    onChange={setSelectedCountry}
                                    placeholder="Currency"
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            border: "none",
                                            boxShadow: "none",
                                            cursor: "pointer",
                                            backgroundColor: "transparent",
                                        }),
                                    }}
                                />
                            </div>

                            {/* Language Dropdown */}
                            <div>
                                <Select
                                    options={languageOptions}
                                    value={selectedLanguage}
                                    onChange={setSelectedLanguage}
                                    placeholder="Language"
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            border: "none",
                                            boxShadow: "none",
                                            cursor: "pointer",
                                            backgroundColor: "transparent",
                                        }),
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={toggleSidebar}
                    style={{ zIndex: 1050 }}
                ></div>
            )}  
        </>
    );
};

export default Sidebar;
