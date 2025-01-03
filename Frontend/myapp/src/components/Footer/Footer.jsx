import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoArrowUpRight } from "react-icons/go";
import "./Footer.css"; // Add a CSS file for custom styling
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { Collapse } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer bg-light py-5">
            <div className="" style={{ margin: "0px 2.5rem" }}>
                <div className="row d-none d-md-flex">
                    {/* Logo and Address Section */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src="/project_1/IMAGES/logo.svg" className="mb-5" alt="" />
                        <p>
                            Address: 1234 Fashion Street, Suite 567, <br />
                            New York, NY 10001
                        </p>
                        <p>Email: info@fashionshop.com</p>
                        <p>Phone: (212) 555-1234</p>
                        <a href="/" className="text-decoration-none pb-1" style={{ borderBottom: "2px solid black" }}>
                            Get direction <span><GoArrowUpRight /></span>
                        </a>
                        <div className="mt-4">
                            {/* Social Icons */}
                            <a href="/" className="me-3 text-dark ">
                                <FaFacebookF style={{ border: "2px solid black", borderRadius: "50%", padding: "6px" }} size={34} />
                            </a>
                            <a href="/" className="me-3 text-dark ">
                                <FaXTwitter style={{ border: "2px solid black", borderRadius: "50%", padding: "6px" }} size={34} />
                            </a>
                            <a href="/" className="me-3 text-dark ">
                                <FaInstagram style={{ border: "2px solid black", borderRadius: "50%", padding: "6px" }} size={34} />
                            </a>
                            <a href="/" className="text-dark ">
                                <FaTiktok style={{ border: "2px solid black", borderRadius: "50%", padding: "6px" }} size={34} />
                            </a>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-5">Help</h5>
                        <ul className="list-unstyled">
                            <li className=" mb-2"><a href="/" className="text-dark text-decoration-none">Privacy Policy</a></li>
                            <li className=" mb-2"><a href="/" className="text-dark text-decoration-none">Returns + Exchanges</a></li>
                            <li className=" mb-2"><a href="/" className="text-dark text-decoration-none">Shipping</a></li>
                            <li className=" mb-2"><a href="/" className="text-dark text-decoration-none">Terms & Conditions</a></li>
                            <li className=" mb-2"><a href="/" className="text-dark text-decoration-none">FAQ's</a></li>
                            <li className=" mb-2"><a href="/" className="text-dark text-decoration-none">Compare</a></li>
                            <li className=" mb-2"><a href="/" className="text-dark text-decoration-none">My Wishlist</a></li>
                        </ul>
                    </div>

                    {/* About Us Section */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-5">About us</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Our Story</a></li>
                            <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Visit Our Store</a></li>
                            <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Contact Us</a></li>
                            <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Account</a></li>
                        </ul>
                    </div>

                    {/* Sign Up for Email Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-5">Sign Up for Email</h5>
                        <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events, and more!</p>
                        <form className="d-flex">
                            <input
                                type="email"
                                className="form-control me-2"
                                placeholder="Enter your email..."
                            />
                            <button className="btn btn-dark" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="d-md-none">

                </div>

                <div className="d-md-none">
                    {/* Logo and Address Section */}
                    <div className="mb-5">
                        <img src="/project_1/IMAGES/logo.svg" className="mb-4" alt="" />
                        <p>
                            Address: 1234 Fashion Street, Suite 567, <br />
                            New York, NY 10001
                        </p>
                        <p>Email: info@fashionshop.com</p>
                        <p>Phone: (212) 555-1234</p>
                        <a href="/" className="text-decoration-none pb-1" style={{ borderBottom: "2px solid black" }}>
                            Get direction <span><GoArrowUpRight  /></span>
                        </a>
                        <div className="mt-4">
                            {/* Social Icons */}
                            <a href="/" className="me-3 text-dark ">
                                <FaFacebookF style={{ border: "2px solid black", borderRadius: "50%", padding: "6px" }} size={34} />
                            </a>
                            <a href="/" className="me-3 text-dark ">
                                <FaXTwitter style={{ border: "2px solid black", borderRadius: "50%", padding: "6px" }} size={34} />
                            </a>
                            <a href="/" className="me-3 text-dark ">
                                <FaInstagram style={{ border: "2px solid black", borderRadius: "50%", padding: "6px" }} size={34} />
                            </a>
                            <a href="/" className="text-dark ">
                                <FaTiktok style={{ border: "2px solid black", borderRadius: "50%", padding: "6px" }} size={34} />
                            </a>
                        </div>
                    </div>
                    {/* Help Section */}
                    <div className="mb-4">
                        <h5
                            className="mb-5"
                            data-bs-toggle="collapse"
                            data-bs-target="#helpCollapse"
                            aria-expanded="false"
                            aria-controls="helpCollapse"
                            style={{cursor:"pointer"}}
                        >
                            Help <span className="float-end" style={{fontSize:"1.5rem"}}>+</span>
                        </h5>
                        <Collapse in={false}>
                            <ul className="list-unstyled collapse" id="helpCollapse">
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
                    </div>

                    {/* About Us Section */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5
                            className="mb-5"
                            data-bs-toggle="collapse"
                            data-bs-target="#aboutCollapse"
                            aria-expanded="false"
                            aria-controls="aboutCollapse"
                            style={{cursor:"pointer"}}
                        >
                            About us <span className="float-end" style={{fontSize:"1.5rem"}}>+</span>
                        </h5>
                        <Collapse in={false}>
                            <ul className="list-unstyled collapse" id="aboutCollapse">
                                <li className="mb-2">
                                    <a href="/" className="text-dark text-decoration-none">
                                        Our Story
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="text-dark text-decoration-none">
                                        Visit Our Store
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="text-dark text-decoration-none">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="text-dark text-decoration-none">
                                        Account
                                    </a>
                                </li>
                            </ul>
                        </Collapse>
                    </div>

                    {/* Sign Up for Email Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5
                            className="mb-5 "
                            data-bs-toggle="collapse"
                            data-bs-target="#emailCollapse"
                            aria-expanded="false"
                            aria-controls="emailCollapse"
                            style={{cursor:"pointer"}}
                        >
                            Sign Up for Email <span className="float-end" style={{fontSize:"1.5rem"}}>+</span>
                        </h5>
                        <Collapse in={false}>
                            <div className="collapse" id="emailCollapse">
                                <p>
                                    Sign up to get first dibs on new arrivals, sales, exclusive
                                    content, events, and more!
                                </p>
                                <form className="d-flex">
                                    <input
                                        type="email"
                                        className="form-control me-2"
                                        placeholder="Enter your email..."
                                    />
                                    <button className="btn btn-dark" type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </Collapse>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row text-center">
                    <div className="col-md-6 text-md-start mb-3 mb-md-0">
                        <p className="mb-0 text-secondary">&copy; 2024 Ecomus Store. All Rights Reserved</p>
                    </div>
                    <div className="col-md-6 text-md-end ">
                        <img
                            src="/project_1/IMAGES/img-1.png"
                            alt="Payment Methods"
                            className="img-fluid me-2"
                        />
                        <img
                            src="/project_1/IMAGES/img-2.png"
                            alt="Payment Methods"
                            className="img-fluid me-2"
                        />
                        <img
                            src="/project_1/IMAGES/img-3.png"
                            alt="Payment Methods"
                            className="img-fluid me-2"
                        />
                        <img
                            src="/project_1/IMAGES/img-4.png"
                            alt="Payment Methods"
                            className="img-fluid me-2"
                        />
                        <img
                            src="/project_1/IMAGES/visa.png"
                            alt="Payment Methods"
                            className="img-fluid me-2"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
