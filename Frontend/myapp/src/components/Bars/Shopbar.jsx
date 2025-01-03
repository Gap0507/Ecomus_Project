import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const Shopbar = ({ isShopbarOpen, toggleShopbar }) => {
    const [openCollapse, setOpenCollapse] = useState({
        fashion: false,
        men: false,
        women: false,
    });

    const toggleCollapse = (section) => {
        setOpenCollapse((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };


    return (
        <>
            {/* Sidebar */}
            <div
                className={`offcanvas offcanvas-start ${isShopbarOpen ? "show" : ""}`}
                style={{
                    visibility: isShopbarOpen ? "visible" : "hidden",
                    zIndex: 1055,
                    width: "350px",
                    position: "fixed",
                }}
            >
                <div className="offcanvas-header pb-2">
                    {/* <h5 className="offcanvas-title">Menu</h5> */}
                    <button
                        type="button"
                        className="btn-close p-0 m-0"
                        style={{fontSize:'20px'}}
                        onClick={toggleShopbar}
                    ></button>
                </div>
                <div
                    className="offcanvas-body"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "90vh",
                    }}
                >
                    {/* Main Menu Items */}
                    <ul className="list-unstyled mt-3" style={{paddingBottom: "20px"}}>
                        <li className="d-flex align-items-center mb-3" >
                            <img src="/project_1/IMAGES/cate1.jpg" alt="Accessories" className="rounded-circle img-fluid me-2" style={{ border: '1px solid #ebebeb', padding: '3px', width: '50px', height: '50px' }} />
                            <div style={{ borderBottom: '1px solid #ebebeb', flexGrow: '1', paddingBottom: '6px', paddingTop: '4px', marginLeft: '5px' }} >
                                Accessories

                            </div>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <img src="/project_1/IMAGES/cate2.jpg" alt="Accessories" className="rounded-circle img-fluid me-2" style={{ border: '1px solid #ebebeb', padding: '3px', width: '50px', height: '50px' }} />
                            <div style={{ borderBottom: '1px solid #ebebeb', flexGrow: '1', paddingBottom: '6px', paddingTop: '4px', marginLeft: '5px', }} >
                                Dog

                            </div>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <img src="/project_1/IMAGES/cate3.jpg" alt="Accessories" className="rounded-circle img-fluid me-2" style={{ border: '1px solid #ebebeb', padding: '3px', width: '50px', height: '50px' }} />
                            <div style={{ borderBottom: '1px solid #ebebeb', flexGrow: '1', paddingBottom: '6px', paddingTop: '4px', marginLeft: '5px', }} >
                                Grocery

                            </div>

                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <img src="/project_1/IMAGES/cate4.png" alt="Accessories" className="rounded-circle img-fluid me-2" style={{ border: '1px solid #ebebeb', padding: '3px', width: '50px', height: '50px' }} />
                            <div style={{ borderBottom: '1px solid #ebebeb', flexGrow: '1', paddingBottom: '6px', paddingTop: '4px', marginLeft: '5px', }} >
                                Handbag

                            </div>

                        </li>
                        <li className="mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <img src="/project_1/IMAGES/cate5.jpg" alt="Accessories" className="rounded-circle img-fluid me-2" style={{ border: '1px solid #ebebeb', padding: '3px', width: '50px', height: '50px' }} />
                                <div style={{ borderBottom: '1px solid #ebebeb', flexGrow: '1', marginLeft: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <div>
                                        Fashion

                                    </div>
                                    <button
                                        className="btn  text-decoration-none "
                                        onClick={() => toggleCollapse("fashion")}
                                    >
                                        <span>{openCollapse.fashion ? <FaMinus /> : <FaPlus />}</span>
                                    </button>

                                </div>
                            </div>
                            {openCollapse.fashion && (
                                <ul className="list-unstyled ps-4">
                                    <li>Sub-category 1</li>
                                    <li>Sub-category 2</li>
                                </ul>
                            )}
                        </li>
                        <li className="mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <img src="/project_1/IMAGES/cate6.jpg" alt="Accessories" className="rounded-circle img-fluid me-2" style={{ border: '1px solid #ebebeb', padding: '3px', width: '50px', height: '50px' }} />
                                <div style={{ borderBottom: '1px solid #ebebeb', flexGrow: '1', marginLeft: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <div>
                                        Men

                                    </div>
                                    <button
                                        className="btn  text-decoration-none "
                                        onClick={() => toggleCollapse("men")}
                                    >
                                        <span>{openCollapse.men ? <FaMinus /> : <FaPlus />}</span>
                                    </button>

                                </div>
                            </div>
                            {openCollapse.men && (
                                <ul className="list-unstyled ps-4">
                                    <li>Sub-category 1</li>
                                    <li>Sub-category 2</li>
                                </ul>
                            )}
                        </li>
                        <li className="mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <img src="/project_1/IMAGES/cate7.jpg" alt="Accessories" className="rounded-circle img-fluid me-2" style={{ border: '1px solid #ebebeb', padding: '3px', width: '50px', height: '50px' }} />
                                <div style={{ borderBottom: '1px solid #ebebeb', flexGrow: '1', marginLeft: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <div>
                                        Women

                                    </div>
                                    <button
                                        className="btn text-decoration-none "
                                        onClick={() => toggleCollapse("women")}
                                    >
                                        <span>{openCollapse.women ? <FaMinus /> : <FaPlus />}</span>
                                    </button>

                                </div>

                            </div>
                            {openCollapse.women && (
                                <ul className="list-unstyled ps-4">
                                    <li>Sub-category 1</li>
                                    <li>Sub-category 2</li>
                                </ul>
                            )}
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <img src="/project_1/IMAGES/cate8.jpg" alt="Accessories" className="rounded-circle img-fluid me-2" style={{ border: '1px solid #ebebeb', padding: '3px', width: '50px', height: '50px' }} />
                            <div style={{ borderBottom: '1px solid #ebebeb', flexGrow: '1', paddingBottom: '6px', paddingTop: '4px', marginLeft: '5px', }} >
                                Tee

                            </div>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <img src="/project_1/IMAGES/cate9.jpg" alt="Accessories" className="rounded-circle img-fluid me-2" style={{ border: '1px solid #ebebeb', padding: '3px', width: '50px', height: '50px' }} />
                            <div style={{ borderBottom: '1px solid #ebebeb', flexGrow: '1', paddingBottom: '6px', paddingTop: '4px', marginLeft: '5px', }} >
                                Shoes

                            </div>
                        </li>
                    </ul>


                    {/* Fixed Login Button */}
                    <div
                        className="p-3 w-100"
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: "#f2f2f2",
                            borderTop: "1px solid #ddd",
                        }}
                    >
                        <a href="#" className="w-100  text-dark text-decoration-none  pb-2" style={{ borderBottom:'1px solid black' }}>
                            View all collection <GoArrowUpRight />
                        </a>

                        
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isShopbarOpen && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={toggleShopbar}
                    style={{ zIndex: 1050 }}
                ></div>
            )}
        </>
    );
};

export default Shopbar;
