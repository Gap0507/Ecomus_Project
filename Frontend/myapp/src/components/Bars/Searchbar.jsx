import React from 'react';
import { IoSearch } from "react-icons/io5";

const Searchbar = ({ isSearchbarOpen, toggleSearchbar }) => {
    return (
        <>
            <div className={`offcanvas offcanvas-end ${isSearchbarOpen ? "show" : ""}`} tabIndex="-1" id="searchSidebar" aria-labelledby="searchSidebarLabel"
                style={{
                    zIndex: 1055,
                    width: "350px",
                    position: "fixed",
                }}>
                <div className="offcanvas-header flex-column border-bottom" style={{ alignItems: 'normal' }}>
                    <div className=' d-flex justify-content-between align-items-center'>
                        <h2 className="offcanvas-title" id="searchSidebarLabel">Search our site</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleSearchbar}></button>

                    </div>
                    <div className="my-3">
                        <div className="input-group">
                            <span className="input-group-text">
                                <IoSearch />
                            </span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <div className="mb-4">
                        <h5>Quick link</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="btn p-0 py-1 pt-3 text-decoration-none">Fashion</a></li>
                            <li><a href="#" className="btn p-0 py-1 text-decoration-none">Men</a></li>
                            <li><a href="#" className="btn p-0 py-1 text-decoration-none">Women</a></li>
                            <li><a href="#" className="btn p-0 py-1 text-decoration-none">Accessories</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-3">Need some inspiration?</h3>
                        <div className="d-flex mb-3">
                            <img src="/project_1/IMAGES/white-3.jpg" style={{ width: '73px' }} alt="Cotton jersey top" className="me-3" />
                            <div>
                                <p className="mb-0">Cotton jersey top</p>
                                <p className="mb-0">
                                    <span className="text-decoration-line-through">$10.00</span>
                                    <span className="text-danger ms-2">$8.00</span>
                                </p>
                            </div>
                        </div>
                        <hr style={{ color: '#0000004d' }} />
                        <div className="d-flex mb-3">
                            <img src="/project_1/IMAGES/white-2.jpg" style={{ width: '73px' }} alt="Mini crossbody bag" className="me-3" />
                            <div>
                                <p className="mb-0">Mini crossbody bag</p>
                                <p className="mb-0">$18.00</p>
                            </div>
                        </div>
                        <hr style={{ color: '#0000004d' }} />
                        <div className="d-flex">
                            <img src="/project_1/IMAGES/white-1.jpg" style={{ width: '73px' }} alt="Mini crossbody bag" className="me-3" />
                            <div>
                                <p className="mb-0">Mini crossbody bag</p>
                                <p className="mb-0">$18.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Overlay */}
            {isSearchbarOpen && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={toggleSearchbar}
                    style={{ zIndex: 1051 }}
                ></div>
            )}
        </>
    );
};

export default Searchbar;
