import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Modal } from "react-bootstrap";
import ProductPopup from "../Popups/ProductPopup";

const ProductSection = () => {
    const [selectedColors, setSelectedColors] = useState({}); // Track selected color for each product
    const [hoveredColor, setHoveredColor] = useState(null); // Track hovered color
    const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCartProduct, setSelectedCartProduct] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const products = [
        {
            id: 1,
            name: "Ribbed Tank Top",
            price: "$16.95",
            colorImages: {
                orange: "project_1/IMAGES/orange-1.jpg",
                black: "project_1/IMAGES/black-1.jpg",
                white: "project_1/IMAGES/white-1.jpg",
            },
            colors: ["orange", "black", "white"],
            sizes: ["S", "M", "L", "XL"],
        },
        {
            id: 2,
            name: "Ribbed modal T-shirt",
            price: "From $18.95",
            colorImages: {
                white: "project_1/IMAGES/white-2.jpg",
                pink: "project_1/IMAGES/pink-1.jpg",
                green: "project_1/IMAGES/green.jpg",
            },
            colors: ["white", "pink", "green"],
            saleTime: "11d : 15h : 50m : 02s",
            sizes: ["S", "M", "L", "XL"],
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Set initial selected color for each product
    useEffect(() => {
        const initialColors = {};

        products.forEach((product) => {
            if (product.colors && product.colors.length > 0) {
                initialColors[product.id] = product.colors[0]; // Select the first color by default
            }
        });
        setSelectedColors(initialColors);
    }, []);

    const handleColorSelect = (productId, color) => {
        setSelectedColors((prevState) => ({
            ...prevState,
            [productId]: color, // Update the selected color for the product
        }));
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowPopup(true);
    };
    const handleCartProductClick = (product) => {
        setSelectedCartProduct(product);
        setShowCartPopup(true);
    };

    const handleClosePopup = () => {

        setShowPopup(false);
        setSelectedProduct(null);
        setShowCartPopup(false);
        setSelectedCartProduct(null);
    };
    return (
        <div className="container py-5">
            {/* Top Section */}
            <div className="row ">
                <div className='row col-md-8 '>
                    <div className="col-md-3">
                        <h5 className="fw-bold mb-4" style={{fontSize:'16px'}}>PRODUCT LAYOUTS</h5>
                        <ul className="list-unstyled">
                            <li className=" mb-3">Product default</li>
                            <li className=" mb-3">Product grid 1</li>
                            <li className=" mb-3">Product grid 2</li>
                            <li className=" mb-3">Product stacked</li>
                            <li className=" mb-3">Product right thumbnails</li>
                            <li className=" mb-3">Product bottom thumbnails</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="fw-bold mb-4" style={{fontSize:'16px'}}>PRODUCT DETAILS</h5>
                        <ul className="list-unstyled">
                            <li className=" mb-3">Product inner zoom</li>
                            <li className=" mb-3">Product zoom magnifier</li>
                            <li className=" mb-3">Product no zoom</li>
                            <li className=" mb-3">Product photoswipe popup</li>
                            <li className=" mb-3">Product external zoom and photoswipe popup</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="fw-bold mb-4" style={{fontSize:'16px'}}>PRODUCT SWATCHES</h5>
                        <ul className="list-unstyled">
                            <li className=" mb-3">Product color swatch</li>
                            <li className=" mb-3">Product rectangle</li>
                            <li className=" mb-3">Product rectangle color</li>
                            <li className=" mb-3">Product swatch image</li>
                            <li className=" mb-3">Product swatch image rounded</li>
                            <li className=" mb-3">Product swatch dropdown</li>
                            <li className=" mb-3">Product swatch dropdown color</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="fw-bold mb-4" style={{fontSize:'16px'}}>PRODUCT FEATURES</h5>
                        <ul className="list-unstyled">
                            <li className=" mb-3">Frequently bought together</li>
                            <li className=" mb-3">Frequently bought together 2</li>
                            <li className=" mb-3">Product upsell features</li>
                            <li className=" mb-3">Product pre-orders</li>
                            <li className=" mb-3">Back in stock notification</li>
                            <li className=" mb-3">Product pickup</li>
                            <li className=" mb-3">Quick order list</li>
                        </ul>
                    </div>
                </div>
                <div className="row col-md-4 ">
                    <h5 className="fw-bold mb-4" style={{fontSize:'16px'}}>BEST SELLER</h5>
                    {products.map((product) => (
                        <div key={product.id} className="col-md-6" onMouseEnter={() => setHoveredCard(product.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="card border-0 text-center">
                                <div style={{ position: "relative", borderRadius: "12px" }}> {/* Image Container */}
                                    <img
                                        src={
                                            selectedColors[product.id]
                                                ? product.colorImages[selectedColors[product.id]]
                                                : product.colorImages[product.colors[0]]
                                        }
                                        className="card-img-top"
                                        alt={product.name}
                                        style={{ objectFit: "cover", height: "300px", borderRadius: "12px" }}
                                    />

                                    {/* Icons */}
                                    <div className="hover-icons" style={{
                                        bottom: (product.sizes && screenSize.width > 576) ? "15%" : "5%",
                                    }}>
                                        <button className="btn btn-light rounded-2 p-1 p-md-2">
                                            <FiShoppingCart size={20} onClick={() => handleCartProductClick(product)} />
                                        </button>
                                        <button className="btn btn-light rounded-2 p-1 p-md-2 d-none d-md-block">
                                            <FaRegHeart size={20} />
                                        </button>
                                        <button className="btn btn-light rounded-2 p-1 p-md-2 d-none d-md-block">
                                            <MdCompareArrows size={20} />
                                        </button>
                                        <button className="btn btn-light rounded-2 p-1 p-md-2">
                                            <MdOutlineRemoveRedEye size={20} onClick={() => handleProductClick(product)} />
                                        </button>
                                    </div>

                                    {/* Sizes */}
                                    {product.sizes && (
                                        <div className="sizes d-none d-sm-flex">
                                            {product.sizes.map((size) => (
                                                <span>{size}</span>

                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Card Body */}
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontSize:'16px'}}>{product.name}</h5>
                                    <p className="fw-bold" >{product.price}</p>

                                    {/* Color Options */}
                                    {product.colors && (
                                        <div className="d-flex justify-content-center gap-2">
                                            {product.colors.map((color, index) => (
                                                <span
                                                    key={index}
                                                    className={`rounded-circle`}
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        border: selectedColors[product.id] === color
                                                            ? "3px solid black"
                                                            : hoveredColor === `${product.id}-${color}`
                                                                ? "3px solid gray"
                                                                : "0px",
                                                        cursor: "pointer",
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'

                                                    }}

                                                    onClick={() => handleColorSelect(product.id, color)}
                                                    onMouseEnter={() => setHoveredColor(`${product.id}-${color}`)}
                                                    onMouseLeave={() => setHoveredColor(null)}
                                                >
                                                    <span style={{
                                                        backgroundColor: color, width: "12px",
                                                        height: "12px", display: 'inline-block', borderRadius: '50%',
                                                        border: "1px solid #ddd",
                                                    }} />
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                {selectedProduct &&
                    <ProductPopup
                        product={selectedProduct}
                        show={showPopup}
                        onClose={handleClosePopup}
                    />
                }
                {selectedCartProduct &&
                    <ProductPopup
                        product={selectedCartProduct}
                        showCart={showCartPopup}
                        onClose={handleClosePopup}
                    />
                }

            </div>


        </div >
    )
}

export default ProductSection