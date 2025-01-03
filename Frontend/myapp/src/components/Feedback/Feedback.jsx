import '../../assets/styles/Feedback.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import BrandSection from './BrandSection';


export default function Feedback() {
    const testimonials = [
        {
            id: 1,
            rating: 5,
            title: "Best Online Fashion Site",
            comment: "I finally found a web fashion site with stylish and flattering options in my size.",
            name: "Robert Smith",
            location: "USA",
            product: "Jersey thong body",
            price: "$105.95",
            image: "/project_1/IMAGES/img-p2.png", // Replace with your image URL
        },
        {
            id: 2,
            rating: 5,
            title: "Great Selection and Quality",
            comment: "I love the variety of styles and the high-quality clothing on this web fashion site.",
            name: "Allen Lyn",
            location: "France",
            product: "Cotton jersey top",
            price: "$7.95",
            image: "/project_1/IMAGES/img-p3.png",
        },
        {
            id: 3,
            rating: 5,
            title: "Best Customer Service",
            comment: "I finally found a web fashion site with stylish and flattering options in my size.",
            name: "Peter Rope",
            location: "USA",
            product: "Ribbed modal T-shirt",
            price: "From $18.95",
            image: "/project_1/IMAGES/img-p4.png",
        },
        {
            id: 4,
            rating: 5,
            title: "Best Customer Service",
            comment: "I finally found a web fashion site with stylish and flattering options in my size.",
            name: "Peter Rope",
            location: "USA",
            product: "Ribbed modal T-shirt",
            price: "From $18.95",
            image: "/project_1/IMAGES/img-p5.png",
        },
        {
            id: 5,
            rating: 5,
            title: "Best Customer Service",
            comment: "I finally found a web fashion site with stylish and flattering options in my size.",
            name: "Peter Rope",
            location: "USA",
            product: "Ribbed modal T-shirt",
            price: "From $18.95",
            image: "/project_1/IMAGES/img-p2.png",
        },
    ];

    return (
        <div className="my-5 " style={{marginLeft:"2rem", marginRight:"2rem"}}>
            <h2 className="text-center mb-2">Happy Clients</h2>
            <p className="text-center text-muted mb-4">Hear what they say about us</p>
            <div className='d-none d-md-flex'>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                    className=' position-relative '
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="card" style={{
                                border: "2px solid whitesmoke",
                                padding: "16px 36px",
                                margin: "10px",
                                borderRadius: "8px"

                            }}>
                                <div className="my-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-warning fs-5">&#9733;</span>
                                    ))}
                                </div>
                                <h5 className="fw-bold">{testimonial.title}</h5>
                                <p className="text-muted mb-4">"{testimonial.comment}"</p>
                                <p className="fw-bold mb-1">{testimonial.name}</p>
                                <p className="text-muted small">Customer from {testimonial.location}</p>
                                <hr></hr>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.product}
                                        className=" me-4"
                                        style={{ width: "80px", height: "100px" }}
                                    />
                                    <div>
                                        <p className="mb-0">{testimonial.product}</p>
                                        <p className="fw-bold mb-0">{testimonial.price}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <div className='d-md-none'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}                    
                    className="position-relative" 
                    style={{paddingBottom:"2.5rem"}}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div
                                className="card"
                                style={{
                                    border: "2px solid whitesmoke",
                                    padding: "16px 36px",
                                    margin: "10px",
                                    borderRadius: "8px",
                                }}
                            >
                                <div className="my-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-warning fs-5">
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                                <h5 className="fw-bold">{testimonial.title}</h5>
                                <p className="text-muted mb-4">"{testimonial.comment}"</p>
                                <p className="fw-bold mb-1">{testimonial.name}</p>
                                <p className="text-muted small">Customer from {testimonial.location}</p>
                                <hr></hr>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.product}
                                        className="me-4"
                                        style={{ width: "80px", height: "100px" }}
                                    />
                                    <div>
                                        <p className="mb-0">{testimonial.product}</p>
                                        <p className="fw-bold mb-0">{testimonial.price}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <BrandSection />

        </div>
    );
}
