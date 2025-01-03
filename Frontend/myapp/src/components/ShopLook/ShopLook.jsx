import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/styles/ShopLook.css';
import { IoEyeOutline } from "react-icons/io5";
import { Pagination } from "swiper/modules";

const ShopLook = () => {
    const [popup, setPopup] = useState({ visible: false, x: 0, y: 0, content: null });

    const handleHotspotClick = (e, content) => {
        const hotspot = e.target.getBoundingClientRect(); // Get the bounding rectangle of the clicked hotspot

        const scrollY = window.scrollY; // Account for vertical scrolling
        const scrollX = window.scrollX; // Account for horizontal scrolling

        setPopup({
            visible: true,
            x: hotspot.left + scrollX, // Adjust for horizontal scroll
            y: hotspot.top + scrollY, // Adjust for vertical scroll
            content: content,
        });
    };

    const closePopup = () => setPopup({ visible: false, x: 0, y: 0, content: null });
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            // Close popup if the click is not on a hotspot or popup
            if (!e.target.closest('.hotspot') && !e.target.closest('.custom-popup')) {
                closePopup();
            }
        };

        // Attach the event listener
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div className="text-center" style={{ overflowX: "hidden", marginTop: "7rem", marginBottom: "6rem" }}>
            {/* Title Section */}
            <h2 className="mb-2">Shop the look</h2>
            <p className="text-muted">
                Inspire and let yourself be inspired, from one unique fashion to another.
            </p>

            {/* Image Section */}
            <div className="d-none d-md-flex row mt-4 no-gutters">
                {/* Left Image */}
                <div className="col-md-6 position-relative image-container mb-4 mb-md-0">
                    <img
                        src="/project_1/IMAGES/lookbook-3.jpg"
                        alt="Fashion 1"
                        className="w-100"
                    />
                    <div
                        className="hotspot"
                        style={{ top: '62%', left: '45%' }}
                        onClick={(e) => handleHotspotClick(e, { title: 'Ribbed modal T-shirt', price: '$20.00', image: '/project_1/IMAGES/brown.jpg' })}
                    >
                        <span></span>
                    </div>
                    <div
                        className="hotspot"
                        style={{ top: '81%', left: '60%' }}
                        onClick={(e) => handleHotspotClick(e, { title: 'Accessories Set', price: '$15.00', image: '/project_1/IMAGES/brown.jpg' })}
                    >
                        <span></span>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-md-6 position-relative image-container">
                    <img
                        src="/project_1/IMAGES/lookbook-4.jpg"
                        alt="Fashion 2"
                        className="w-100"
                    />
                    <div
                        className="hotspot"
                        style={{ top: '17%', left: '55%' }}
                        onClick={(e) => handleHotspotClick(e, { title: 'Summer Hat', price: '$25.00', image: '/project_1/IMAGES/brown.jpg' })}
                    >
                        <span></span>
                    </div>
                </div>
            </div>

            {/* Swiper for smaller screens */}
            <div className="d-md-none mt-4">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="shoplook-swiper"
                >
                    <SwiperSlide className="position-relative image-container">
                        <img
                            src="/project_1/IMAGES/lookbook-3.jpg"
                            alt="Fashion 1"
                            className="img-fluid"
                        />
                        <div
                            className="hotspot"
                            style={{ top: '62%', left: '45%' }}
                            onClick={(e) => handleHotspotClick(e, { title: 'Ribbed modal T-shirt', price: '$20.00', image: '/project_1/IMAGES/brown.jpg' })}
                        >
                            <span></span>
                        </div>
                        <div
                            className="hotspot"
                            style={{ top: '81%', left: '60%' }}
                            onClick={(e) => handleHotspotClick(e, { title: 'Accessories Set', price: '$15.00', image: '/project_1/IMAGES/brown.jpg' })}
                        >
                            <span></span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="position-relative image-container">
                        <img
                            src="/project_1/IMAGES/lookbook-4.jpg"
                            alt="Fashion 2"
                            className="img-fluid"
                        />
                        <div
                            className="hotspot"
                            style={{ top: '17%', left: '55%' }}
                            onClick={(e) => handleHotspotClick(e, { title: 'Summer Hat', price: '$25.00', image: '/project_1/IMAGES/brown.jpg' })}
                        >
                            <span></span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Popup */}
            {popup.visible && (
                <div
                    className="custom-popup d-flex justify-content-between"
                    style={{
                        position: 'absolute',
                        top: popup.y - 100, // Adjust position to appear slightly above
                        left: popup.x - 75, // Center horizontally
                        background: 'white',
                        padding: '10px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        zIndex: 2,
                    }}
                >
                    <div className="d-flex align-items-center">
                        <img
                            src={popup.content.image}
                            alt={popup.content.title}
                            style={{ width: '50px', height: '70px', borderRadius: '5px', marginRight: '18px' }}
                        />
                        <div className="me-4">
                            <h6 className="mb-1">{popup.content.title}</h6>
                            <p className="mb-0 text-muted">{popup.content.price}</p>
                        </div>
                        <div>
                            <IoEyeOutline size={34} style={{ borderRadius: "50%", padding: "6px", backgroundColor: "#ebebeb" }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopLook;
