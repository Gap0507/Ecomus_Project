import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/styles/Cartbar.css';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Cartbar = ({ isCartbarOpen, toggleCartbar }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "T-shirt1",
            description: "Light gray",
            price: 25.0,
            quantity: 1,
            image: "/project_1/IMAGES/white-1.jpg",
        },
        {
            id: 2,
            name: "T-shirt2",
            description: "Light gray",
            price: 8.0,
            quantity: 1,
            image: "/project_1/IMAGES/white-2.jpg",
        },
        {
            id: 3,
            name: "T-shirt3",
            description: "Light gray",
            price: 12.0,
            quantity: 1,
            image: "/project_1/IMAGES/white-3.jpg",
        },
    ]);
    const products = [
        {
            id: 1,
            name: "Loose Fit Sweatshirt",
            price: "$25.00",
            image: "/project_1/IMAGES/white-1.jpg", // Replace with actual image URLs
        },
        {
            id: 2,
            name: "Casual T-Shirt",
            price: "$15.00",
            image: "/project_1/IMAGES/white-2.jpg",
        },
        {
            id: 3,
            name: "Denim Jacket",
            price: "$40.00",
            image: "/project_1/IMAGES/white-3.jpg",
        },
    ];

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const freeShippingThreshold = 75.0;
    const remainingAmount = Math.max(freeShippingThreshold - subtotal, 0);
    const progressPercentage = Math.min((subtotal / freeShippingThreshold) * 100, 100);

    return (
        <>
            <div
                className={`offcanvas offcanvas-end ${isCartbarOpen ? "show" : ""}`}
                tabIndex="-1"
                id="cartOffcanvas"
                aria-labelledby="cartOffcanvasLabel"
                style={{
                    zIndex: 1055,
                    width: "390px",
                    position: "fixed",
                    // paddingRight:'15px'
                }}
            >
                <div className="offcanvas-header mx-3 px-0 " style={{ borderBottom: '1px solid #ebebeb' }}>
                    <h5 id="cartOffcanvasLabel">Shopping Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleCartbar}></button>
                </div>
                <div className="offcanvas-body pb-0"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                    }}>
                    <div className="mb-3 my-2" style={{ borderBottom: '1px solid #ebebeb' }}>
                        <div className="progress" style={{ height: '5px', position: 'relative', marginRight:'12px' }}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${progressPercentage}%`, backgroundColor: '#db1215' }}
                                aria-valuenow={subtotal}
                                aria-valuemin="0"
                                aria-valuemax={freeShippingThreshold}
                            ></div>
                        </div>
                        <div
                            className="progress-icon"
                            style={{ left: `${progressPercentage}%` }}
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="#db1215"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.441406 1.13155C0.441406 0.782753 0.724159 0.5 1.07295 0.5H12.4408C12.7896 0.5 13.0724 0.782753 13.0724 1.13155V2.91575H16.7859C18.8157 2.91575 20.5581 4.43473 20.5581 6.42296V11.8878C20.5581 12.2366 20.2753 12.5193 19.9265 12.5193H18.7542C18.4967 13.6534 17.4823 14.5 16.2703 14.5C15.0582 14.5 14.0439 13.6534 13.7864 12.5193H7.20445C6.94692 13.6534 5.93259 14.5 4.72054 14.5C3.50849 14.5 2.49417 13.6534 2.23664 12.5193H1.07295C0.724159 12.5193 0.441406 12.2366 0.441406 11.8878V1.13155ZM2.26988 11.2562C2.57292 10.1881 3.55537 9.40578 4.72054 9.40578C5.88572 9.40578 6.86817 10.1881 7.17121 11.2562H11.8093V1.76309H1.7045V11.2562H2.26988ZM13.0724 4.17884V6.68916H19.295V6.42296C19.295 5.2348 18.2252 4.17884 16.7859 4.17884H13.0724ZM19.295 7.95226H13.0724V11.2562H13.8196C14.1227 10.1881 15.1051 9.40578 16.2703 9.40578C17.4355 9.40578 18.4179 10.1881 18.7209 11.2562H19.295V7.95226ZM4.72054 10.6689C4.0114 10.6689 3.43652 11.2437 3.43652 11.9529C3.43652 12.662 4.0114 13.2369 4.72054 13.2369C5.42969 13.2369 6.00456 12.662 6.00456 11.9529C6.00456 11.2437 5.42969 10.6689 4.72054 10.6689ZM16.2703 10.6689C15.5611 10.6689 14.9863 11.2437 14.9863 11.9529C14.9863 12.662 15.5611 13.2369 16.2703 13.2369C16.9794 13.2369 17.5543 12.662 17.5543 11.9529C17.5543 11.2437 16.9794 10.6689 16.2703 10.6689Z" /></svg>
                        </div>
                        <p className="mt-3 ">
                            Buy <strong>${remainingAmount.toFixed(2)}</strong> more to enjoy <strong>Free Shipping</strong>
                        </p>
                    </div>

                    <div
                        className="flex-grow-1 overflow-auto pb-3">

                        {cartItems.map((item) => (
                            <>
                                <div key={item.id} className="d-flex align-items-center mb-3">
                                    <img src={item.image} alt={item.name} className="" style={{ width: "64px" }} />
                                    <div className="ms-3">
                                        <p className="mb-0">{item.name}</p>
                                        <small className="text-muted">{item.description}</small>
                                    </div>
                                    <div className="ms-auto">
                                        <p className="mb-0 fw-bold">${item.price.toFixed(2)}</p>
                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => {
                                                    setCartItems((prev) =>
                                                        prev.map((i) =>
                                                            i.id === item.id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
                                                        )
                                                    );
                                                }}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => {
                                                    setCartItems((prev) =>
                                                        prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
                                                    );
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                {!(item.id >= cartItems.length) &&
                                    < hr />
                                }
                            </>
                        ))}
                        <div style={{ maxWidth: "20rem" }}>
                            <Swiper
                                modules={[Pagination]}
                                // spaceBetween={10}
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                    
                                }}
                            >
                                {products.map((product) => (
                                    <SwiperSlide key={product.id} >
                                        <div className="card p-2   position-relative ">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="card-title mb-0 fw-bold">You may also like</h5>
                                                <div className="custom-pagination"></div>
                                            </div>
                                            <div className="d-flex align-items-center mt-3">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    style={{ width: "100px", height: "auto" }}
                                                />
                                                <div className="ms-3 me-4">
                                                    <h6 className="mb-1">{product.name}</h6>
                                                    <p className="mb-0 fw-bold">{product.price}</p>
                                                </div>
                                                <button className="btn btn-dark rounded-circle ms-3" style={{height:'46px', padding:'10px'}}>
                                                    <MdOutlineRemoveRedEye size={24} />
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div
                        className="pb-1 w-100"
                        style={{
                            position: "sticky",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: "#fff",
                        }}
                    >
                        <div className="features-section mb-3">
                            <div className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18" fill="currentColor"><path d="M5.12187 16.4582H2.78952C2.02045 16.4582 1.39476 15.8325 1.39476 15.0634V2.78952C1.39476 2.02045 2.02045 1.39476 2.78952 1.39476H11.3634C12.1325 1.39476 12.7582 2.02045 12.7582 2.78952V7.07841C12.7582 7.46357 13.0704 7.77579 13.4556 7.77579C13.8407 7.77579 14.1529 7.46357 14.1529 7.07841V2.78952C14.1529 1.25138 12.9016 0 11.3634 0H2.78952C1.25138 0 0 1.25138 0 2.78952V15.0634C0 16.6015 1.25138 17.8529 2.78952 17.8529H5.12187C5.50703 17.8529 5.81925 17.5407 5.81925 17.1555C5.81925 16.7704 5.50703 16.4582 5.12187 16.4582Z" /><path d="M15.3882 10.0971C14.5724 9.28136 13.2452 9.28132 12.43 10.0965L8.60127 13.9168C8.51997 13.9979 8.45997 14.0979 8.42658 14.2078L7.59276 16.9528C7.55646 17.0723 7.55292 17.1993 7.58249 17.3207C7.61206 17.442 7.67367 17.5531 7.76087 17.6425C7.84807 17.7319 7.95768 17.7962 8.07823 17.8288C8.19879 17.8613 8.32587 17.8609 8.44621 17.8276L11.261 17.0479C11.3769 17.0158 11.4824 16.9543 11.5675 16.8694L15.3882 13.0559C16.2039 12.2401 16.2039 10.9129 15.3882 10.0971ZM10.712 15.7527L9.29586 16.145L9.71028 14.7806L12.2937 12.2029L13.2801 13.1893L10.712 15.7527ZM14.4025 12.0692L14.2673 12.204L13.2811 11.2178L13.4157 11.0834C13.6876 10.8115 14.1301 10.8115 14.402 11.0834C14.6739 11.3553 14.6739 11.7977 14.4025 12.0692Z" /></svg>
                            </div>
                            <div className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.99566 2.73409C2.99566 0.55401 5.42538 -0.746668 7.23916 0.463462L8.50073 1.30516L9.7623 0.463462C11.5761 -0.746668 14.0058 0.55401 14.0058 2.73409V3.24744H14.8225C15.9633 3.24744 16.8881 4.17233 16.8881 5.31312V6.82566C16.8881 7.21396 16.5734 7.52873 16.1851 7.52873H15.8905V15.1877C15.8905 15.1905 15.8905 15.1933 15.8905 15.196C15.886 16.7454 14.6286 18 13.0782 18H3.92323C2.37003 18 1.11091 16.7409 1.11091 15.1877V7.52877H0.81636C0.42806 7.52877 0.113281 7.21399 0.113281 6.82569V5.31316C0.113281 4.17228 1.03812 3.24744 2.179 3.24744H2.99566V2.73409ZM4.40181 3.24744H7.79765V2.52647L6.45874 1.63317C5.57987 1.0468 4.40181 1.67677 4.40181 2.73409V3.24744ZM9.20381 2.52647V3.24744H12.5996V2.73409C12.5996 1.67677 11.4216 1.0468 10.5427 1.63317L9.20381 2.52647ZM2.179 4.6536C1.81472 4.6536 1.51944 4.94888 1.51944 5.31316V6.12261H5.73398L5.734 4.6536H2.179ZM5.73401 7.52877V13.9306C5.73401 14.1806 5.86682 14.4119 6.08281 14.5379C6.29879 14.6639 6.56545 14.6657 6.78312 14.5426L8.50073 13.5715L10.2183 14.5426C10.436 14.6657 10.7027 14.6639 10.9187 14.5379C11.1346 14.4119 11.2674 14.1806 11.2674 13.9306V7.52873H14.4844V15.1603C14.4844 15.1627 14.4843 15.1651 14.4843 15.1675V15.1877C14.4843 15.9643 13.8548 16.5938 13.0782 16.5938H3.92323C3.14663 16.5938 2.51707 15.9643 2.51707 15.1877V7.52877H5.73401ZM15.482 6.12258V5.31312C15.482 4.94891 15.1867 4.6536 14.8225 4.6536H11.2674V6.12258H15.482ZM9.86129 4.6536H7.14017V12.7254L8.15469 12.1518C8.36941 12.0304 8.63204 12.0304 8.84676 12.1518L9.86129 12.7254V4.6536Z" /></svg>
                            </div>
                            <div className="icon-container">

                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '27px' }} viewBox="0 0 21 15" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.441406 1.13155C0.441406 0.782753 0.724159 0.5 1.07295 0.5H12.4408C12.7896 0.5 13.0724 0.782753 13.0724 1.13155V2.91575H16.7859C18.8157 2.91575 20.5581 4.43473 20.5581 6.42296V11.8878C20.5581 12.2366 20.2753 12.5193 19.9265 12.5193H18.7542C18.4967 13.6534 17.4823 14.5 16.2703 14.5C15.0582 14.5 14.0439 13.6534 13.7864 12.5193H7.20445C6.94692 13.6534 5.93259 14.5 4.72054 14.5C3.50849 14.5 2.49417 13.6534 2.23664 12.5193H1.07295C0.724159 12.5193 0.441406 12.2366 0.441406 11.8878V1.13155ZM2.26988 11.2562C2.57292 10.1881 3.55537 9.40578 4.72054 9.40578C5.88572 9.40578 6.86817 10.1881 7.17121 11.2562H11.8093V1.76309H1.7045V11.2562H2.26988ZM13.0724 4.17884V6.68916H19.295V6.42296C19.295 5.2348 18.2252 4.17884 16.7859 4.17884H13.0724ZM19.295 7.95226H13.0724V11.2562H13.8196C14.1227 10.1881 15.1051 9.40578 16.2703 9.40578C17.4355 9.40578 18.4179 10.1881 18.7209 11.2562H19.295V7.95226ZM4.72054 10.6689C4.0114 10.6689 3.43652 11.2437 3.43652 11.9529C3.43652 12.662 4.0114 13.2369 4.72054 13.2369C5.42969 13.2369 6.00456 12.662 6.00456 11.9529C6.00456 11.2437 5.42969 10.6689 4.72054 10.6689ZM16.2703 10.6689C15.5611 10.6689 14.9863 11.2437 14.9863 11.9529C14.9863 12.662 15.5611 13.2369 16.2703 13.2369C16.9794 13.2369 17.5543 12.662 17.5543 11.9529C17.5543 11.2437 16.9794 10.6689 16.2703 10.6689Z" /></svg>
                            </div>


                        </div>
                        <div className="  pb-3 " style={{ borderBottom: '1px solid #ebebeb' }}>

                            <div className="d-flex justify-content-between align-items-center  mb-2">
                                <h5 className="mb-0">Subtotal</h5>
                                <h5 className="mb-0 fw-bold">${subtotal.toFixed(2)} USD</h5>
                            </div>
                            <small className="text-muted">Taxes and <span className=" text-decoration-underline text-dark">shipping</span>  calculated at checkout</small>
                        </div>
                        <div className="form-check mt-2 p-0  d-flex align-items-center">
                            <input className="form-check-input m-0 p-0 me-2" type="checkbox" id="termsCheck" />
                            <label className="form-check-label" htmlFor="termsCheck">
                                I agree with the <a href="#" className="text-dark">terms and conditions</a>
                            </label>
                        </div>
                        <div className="mt-3 ">
                            <button className="btn btn-outline-dark w-100 mb-2">View Cart</button>
                            <button className="btn btn-dark w-100">Check Out</button>
                        </div>
                    </div>

                </div>
            </div>
            {/* Overlay */}
            {isCartbarOpen && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={toggleCartbar}
                    style={{ zIndex: 1050 }}
                ></div>
            )}
        </>
    );
};

export default Cartbar;
