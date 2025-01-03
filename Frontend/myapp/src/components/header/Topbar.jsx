import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import Select from "react-select";

const Topbar = () => {
  const countryOptions = [
    {
      value: "USD",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="https://flagcdn.com/us.svg"
            alt="USA"
            style={{ width: "20px", height: "15px" }}
          />
          United States Dollar (USD)
        </div>
      ),
    },
    {
      value: "EUR",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="https://flagcdn.com/eu.svg"
            alt="EUR"
            style={{ width: "20px", height: "15px" }}
          />
          Euro (EUR)
        </div>
      ),
    },
    {
      value: "INR",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="https://flagcdn.com/in.svg"
            alt="India"
            style={{ width: "20px", height: "15px" }}
          />
          Indian Rupee (INR)
        </div>
      ),
    },
  ];

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  return (
    <div className="container-fluid topbar">
      {/* Only display text on small and medium screens */}
      <div className="text-center py-1 only-text-mobile">
        <p className="m-0" style={{ fontWeight: "bold" }}>
          Time to refresh your wardrobe.
        </p>
      </div>  
      <div className="text-center py-1 only-text-tablet">
        <p className="m-0" style={{ fontWeight: "bold" }}>
          Summer sale discount off 70%
        </p>
      </div>  

      {/* Full topbar on large screens */}
      <div className="d-flex justify-content-between align-items-center py-1 all">
        {/* Social Icons */}
        <div className="d-flex">
          <FaFacebookF className="icons m-1 p-1" size={24} />
          <FaXTwitter className="icons m-1 p-1" size={24} />
          <FaInstagram className="icons m-1 p-1" size={24} />
          <FaTiktok className="icons m-1 p-1" size={24} />
        </div>

        {/* Centered Sale Text */}
        <div>
          <p className="m-0">
            Spring Fashion Sale{" "}
            <a
              href="#"
              style={{ color: "#ff7b54", textDecoration: "underline" }}
            >
              Shop Now <GoArrowUpRight />
            </a>
          </p>
        </div>

        {/* Dropdowns */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center", zIndex:"15" }}>
          {/* Country Dropdown */}
          <div>
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              placeholder="Currency"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                }),
              }}
            />
          </div>

          {/* Language Dropdown */}
          <div>
            <Select
              options={languageOptions}
              value={selectedLanguage}
              onChange={setSelectedLanguage}
              placeholder="Language"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                }),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
