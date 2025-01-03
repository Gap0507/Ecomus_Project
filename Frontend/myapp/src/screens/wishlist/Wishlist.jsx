import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Modal } from "react-bootstrap";
import ProductPopup from "../../components/Popups/ProductPopup";

const Wishlist = () => {
  const [selectedColors, setSelectedColors] = useState({}); // Track selected color for each product
  const [hoveredColor, setHoveredColor] = useState(null); // Track hovered color
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCartProduct, setSelectedCartProduct] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
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
    // {
    //   id: 3,
    //   name: "Oversized Printed T-shirt",
    //   price: "$10.00",
    //   image: "project_1/IMAGES/white-3.jpg",
    //   saleTime: "11d : 15h : 50m : 02s",
    // },
    {
      id: 4,
      name: "Oversized Printed T-shirt",
      price: "$16.95",
      colorImages: {
        blue: "project_1/IMAGES/blue-2.jpg",
        pink: "project_1/IMAGES/pink-2.jpg",
        white: "project_1/IMAGES/white-3.jpg",
      },
      colors: ["blue", "pink", "white"],
    },
    {
      id: 5,
      name: "Oversized Printed T-shirt",
      price: "$16.95",
      colorImages: {
        black: "project_1/IMAGES/black-2.jpg",
        pink: "project_1/IMAGES/light-pink.jpg",
        white: "project_1/IMAGES/white-4.jpg",
      },
      colors: ["black", "pink", "white"],
    },
    {
      id: 6,
      name: "Oversized Printed T-shirt",
      price: "$16.95",
      colorImages: {
        brown: "project_1/IMAGES/brown-2.jpg",
        purple: "project_1/IMAGES/purple.jpg",
        white: "project_1/IMAGES/white-5.jpg",
      },
      colors: ["brown", "purple", "white"],
    },
    {
      id: 7,
      name: "Oversized Printed T-shirt",
      price: "$16.95",
      colorImages: {
        beige: "project_1/IMAGES/beige.jpg",
        pink: "project_1/IMAGES/pink-2.jpg",
        white: "project_1/IMAGES/white-6.jpg",
      },
      colors: ["beige", "pink", "white"],
    },
    // {
    //   id: 8,
    //   name: "Oversized Printed T-shirt",
    //   price: "$16.95",
    //   image: "project_1/IMAGES/white-8.jpg",
    //   colors: ["black", "pink", "white"],
    // },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "160px",
          background: "linear-gradient(to right, #fceceb, #f1f8ff)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "30px", fontWeight: "500" }}>Your wishlist</h1>
      </div>
      <section className="container px-3" style={{ marginTop: "5rem" }}>
        <div className="row g-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card border-0 text-center">
                <div style={{ position: "relative", borderRadius: "12px" }}>
                  {/* Display image based on selected color */}
                  <img
                    src={
                      selectedColors[product.id]
                        ? product.colorImages[selectedColors[product.id]]
                        : product.colorImages[product.colors[0]]
                    }
                    className="card-img-top"
                    alt={product.name}
                    style={{ objectFit: "cover", height: "400px", borderRadius: "12px" }}
                  />
                  {/* Sale Time Badge */}
                  {product.saleTime && (
                    <div
                      className="badge p-lg-3 p-2 p-md-2 sale-time w-75"
                      style={{
                        position: "absolute",
                        left: "50%",
                        bottom:
                          hoveredCard === product.id
                            ? !product.sizes
                              ? "20%"
                              : screenSize.width > 576
                                ? "30%"
                                : "20%"
                            : "12px",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                      }}
                    >
                      {product.saleTime}
                    </div>
                  )}

                  {/* Icons */}
                  <div
                    className="hover-icons"
                    style={{
                      bottom: product.sizes && screenSize.width > 576 ? "15%" : "5%",
                    }}
                  >
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
                        <span key={size}>{size}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="fw-bold">{product.price}</p>

                  {/* Color Options */}
                  {product.colors && (
                    <div className="d-flex justify-content-center gap-2">
                      {product.colors.map((color, index) => (
                          <span
                            key={index}
                            className={`rounded-circle`}
                            style={{
                              width: "30px",
                              height: "30px",
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
                              backgroundColor: color, width: "20px",
                              height: "20px", display: 'inline-block', borderRadius: '50%',
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
        {selectedProduct && (
          <ProductPopup product={selectedProduct} show={showPopup} onClose={handleClosePopup} />
        )}
        {selectedCartProduct && (
          <ProductPopup product={selectedCartProduct} showCart={showCartPopup} onClose={handleClosePopup} />
        )}
      </section>
    </>

  );
};

export default Wishlist;
