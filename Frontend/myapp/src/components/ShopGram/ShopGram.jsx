import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination'; // Optional: For pagination dots
import { Pagination } from 'swiper/modules';
import { FiShoppingCart } from 'react-icons/fi';
import '../../assets/styles/ShopGram.css'
import FeaturesSection from './FeaturesSection';

const ShopGram = () => {
    return (
        <div className="text-center my-5 " style={{ marginLeft: '2.4rem', marginRight: '2.4rem' }}>
            <h2 className="fw-bold">Shop Gram</h2>
            <p className="text-muted">
                Inspire and let yourself be inspired, from one unique fashion to another.
            </p>
            <div className='mt-5'>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        992:{
                            slidesPerView: 5,

                        }
                    }}
                    pagination={{ clickable: true }}
                    className="position-relative mb-5 mb-lg-0"
                    style={{ paddingBottom: '2.4rem' }}
                >
                    {["gallery-7.jpg", "gallery-3.jpg", "gallery-5.jpg", "gallery-8.jpg", "gallery-6.jpg"].map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className=" mb-3 shop-image-wrapper">
                                <img
                                    src={`/project_1/IMAGES/${image}`} // Replace with actual image URL
                                    alt={`Item ${index + 1}`}
                                    className="img-fluid rounded shop-image"
                                />
                                <div className="cart-icon-wrapper">
                                    <FiShoppingCart className="cart-icon" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <FeaturesSection />
        </div>
    );
};

export default ShopGram;
