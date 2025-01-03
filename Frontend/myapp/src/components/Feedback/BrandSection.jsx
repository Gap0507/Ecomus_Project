import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination'; // Optional: For pagination dots
import { Pagination } from "swiper/modules";
import '../../assets/styles/ShopLook.css'; // Custom styles for positioning hotspots

const BrandSection = () => {
    const brands = [
        { name: 'SSENSE', logo: '/project_1/IMAGES/brand-01.png' },
        { name: 'BURBERRY', logo: '/project_1/IMAGES/brand-02.png' },
        { name: 'Nike', logo: '/project_1/IMAGES/brand-03.png' },
        { name: 'ASOS', logo: '/project_1/IMAGES/brand-04.png' },
        { name: 'PULL&BEAR', logo: '/project_1/IMAGES/brand-05.png' },
        { name: 'GILDAN', logo: '/project_1/IMAGES/brand-06.png' },
    ];

    return (
        <>
            <div className="py-5 d-none d-lg-block" style={{ marginLeft: "1.2rem", marginRight: "1.2rem" }}>
                <div className=" row justify-content-center align-items-center ">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="col-6 col-sm-4 col-md-2 text-center border p-4 "
                            style={{
                                borderTopLeftRadius: index === 0 ? "10px" : "0px",
                                borderBottomLeftRadius: index === 0 ? "10px" : "0px",
                                borderTopRightRadius: index === brands.length - 1 ? "10px" : "0px",
                                borderBottomRightRadius: index === brands.length - 1 ? "10px" : "0px",
                            }}
                        >
                            {brand.logo ? (
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="img-fluid"
                                    style={{ maxHeight: '50px' }}
                                />
                            ) : (
                                <span className="fw-bold">{brand.name}</span>
                            )}
                        </div>
                    ))}
                </div>

            </div>
            <div className="d-lg-none py-5" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                <div >
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={2}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        }}
                        pagination={{ clickable: true }}
                        className=' position-relative'
                        style={{paddingBottom:"3rem"}}
                    >
                        {brands.map((brand, index) => (
                            <SwiperSlide key={index} 
                            >
                                <div className="text-center border p-3">
                                    {brand.logo ? (
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="img-fluid"
                                            style={{ maxHeight: '50px' }}
                                        />
                                    ) : (
                                        <span className="fw-bold">{brand.name}</span>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default BrandSection;
