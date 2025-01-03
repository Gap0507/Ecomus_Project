import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/HomeSection.css'; // Custom CSS for hover effects
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const HomeSection = () => {
  return (
    <div className="container pt-4" >
      <div className="row text-center ">
        {/* Example navigation section */}
        <div className="col-md-2">
          <div className="hover-card">

            <img
              src="/project_1/IMAGES/home-01.jpg"
              alt="Home Fashion"
              className="img-fluid rounded "
              style={{ width: '180px' }}
            />
            <h5>Home Fashion 03</h5>
            <div className="hover-overlay">
              <Link to="/" className="btn btn-outline-info mt-2">Explore</Link>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-02.jpg"
              alt="Personalized Pod"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Personalized Pod</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-03.jpg"
              alt="Pickleball"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Pickleball</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-04.jpg"
              alt="Ceramic"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Ceramic</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-05.jpg"
              alt="Ceramic"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Ceramic</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-06.jpg"
              alt="Ceramic"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Ceramic</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-07.jpg"
              alt="Ceramic"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Ceramic</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-08.jpg"
              alt="Ceramic"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Ceramic</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-accessories.jpg"
              alt="Ceramic"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Ceramic</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-activewear.jpg"
              alt="Ceramic"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Ceramic</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-baby.jpg"
              alt="Ceramic"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Ceramic</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="hover-card">
            <img
              src="/project_1/IMAGES/home-decor.jpg"
              alt="Ceramic"
              className="img-fluid rounded"
              style={{ width: '180px' }}
            />
            <h5>Home Ceramic</h5>
            <div className="hover-overlay">
              <button className="btn btn-outline-info mt-2">Explore</button>
            </div>
          </div>
        </div>
      </div>
      <div className=' d-flex align-items-center justify-content-center mb-3'>
        <button className='btn btn-dark'>View all demos (39+) <MdKeyboardArrowRight size={24} /> </button>
      </div>
    </div>
  );
};

export default HomeSection;
