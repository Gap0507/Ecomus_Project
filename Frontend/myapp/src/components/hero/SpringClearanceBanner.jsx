import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/styles/SpringClearanceBanner.css';
import axios from 'axios';

const SpringClearanceBanner = () => {
    const [string, setString] = useState("")
    useEffect(() => {
        // Fetch banners from the backend
        const fetchMarquee = async () => {
          try {
            const response = await axios.get("http://localhost:7777/homePage/marquee"); // Adjust the URL if needed
            let marquee = response.data.marquee.filter((m) => m.isActive === true)
            
            setString(marquee[0].string);
          } catch (err) {
            console.log(err.message);
          }
        };
    
        fetchMarquee();
      }, []);
    return (
        <Container fluid style={{"backgroundColor":"#fcffb2"}} className="text-dark py-1 py-xl-2 mb-5 overflo">
            <div className="marquee h-xl-50">
                <span><img src="/project_1/IMAGES/e3e9f171-34ff-47a2-991c-7e97e3613ea2.svg" className='image' alt="" /> {string} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="/project_1/IMAGES/e3e9f171-34ff-47a2-991c-7e97e3613ea2.svg" className='image' alt="" /> {string} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="/project_1/IMAGES/e3e9f171-34ff-47a2-991c-7e97e3613ea2.svg" className='image' alt="" /> {string} </span>
            </div>
        </Container>
    );
};

export default SpringClearanceBanner;
