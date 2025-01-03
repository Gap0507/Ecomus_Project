import React, { useState } from 'react';
import BannerSection from '../../components/Admin/BannnerSection';
import MarqueeSection from '../../components/Admin/MarqueeSection';
import CategorySection from '../../components/Admin/CategorySection';
import ProductSection from '../../components/Admin/ProductSection';

// Import other components for different sections
function AdminDashboard() {

  const [activeOption, setActiveOption] = useState('dashboard');

  const renderDynamicContent = () => {
    switch (activeOption) {
      case 'dashboard':
        return <BannerSection />;
      case 'Banner Section':
        return <BannerSection />;
      case 'Marquee Section':
        return <MarqueeSection />;
      case 'categories':
        return <CategorySection />;
      case 'products':
        return <ProductSection />;
      default:
        return <BannerSection />;
    }
  };

  return (
    <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3 vh-100"
        style={{ width: '250px', overflowY: 'auto', position: 'fixed', top: 0, left: 0 }}
      >
        <h4 className="text-center">Admin Panel</h4>
        <ul className="nav flex-column mt-4">
          {[
            { key: 'dashboard', label: 'Dashboard' },
            { key: 'Banner Section', label: 'Banner Section' },
            { key: 'Marquee Section', label: 'Marquee Section' },
            { key: 'categories', label: 'Categories' },
            { key: 'products', label: 'Products' },
          ].map((item) => (
            <li className="nav-item" key={item.key}>
              <button
                className={`btn btn-link w-100 text-start ${activeOption === item.key ? 'text-white fw-bold bg-secondary' : 'text-light'
                  }`}
                style={{
                  borderRadius: '5px',
                  padding: '10px',
                  margin: '5px 0',
                  textDecoration: 'none',
                }}
                onClick={() => setActiveOption(item.key)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="d-flex flex-column flex-grow-1"
        style={{ marginLeft: '250px', overflow: 'hidden' }}
      >
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ position: 'fixed', top: 0, left: '250px', right: 0, zIndex: 1 }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              E-commerce Admin
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Dynamic Content */}
        <div
          className="container-fluid mt-5 p-3"
          style={{
            overflowY: 'auto',
            height: 'calc(100vh - 56px)', // Subtract navbar height
          }}
        >
          {renderDynamicContent()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
