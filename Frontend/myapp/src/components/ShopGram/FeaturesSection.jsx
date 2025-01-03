import React from "react";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping, MdOutlinePayment, MdKeyboardReturn } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const FeaturesSection = () => {
    const features = [
        {
            icon: <MdOutlineLocalShipping size={40} />,
            title: "Free Shipping",
            description: "Free shipping over order $120",
        },
        {
            icon: <MdOutlinePayment size={40} />,
            title: "Flexible Payment",
            description: "Pay with Multiple Credit Cards",
        },
        {
            icon: <MdKeyboardReturn size={40} />,
            title: "14 Day Returns",
            description: "Within 30 days for an exchange",
        },
        {
            icon: <BiSupport size={40} />,
            title: "Premium Support",
            description: "Outstanding premium support",
        },
    ];

    return (
        <div>
            {/* For larger screens */}
            <div className="d-none d-md-block">
                <div className="row">
                    {features.map((feature, index) => (
                        <div className="col-lg-3 col-md-6 mb-md-4 mb-lg-0 text-center" key={index}>
                            <div className="p-3 border rounded">
                                <div style={{ marginBottom: "2.2rem" }} >{feature.icon}</div>
                                <h5>{feature.title}</h5>
                                <p className="text-muted">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* For smaller screens */}
            <div className="d-md-none">
                <Swiper
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{paddingBottom:"2.8rem"}}
                >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center p-3 border rounded">
                                <div style={{ marginBottom: "2.2rem" }}>{feature.icon}</div>
                                <h5>{feature.title}</h5>
                                <p className="text-muted">{feature.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturesSection;
