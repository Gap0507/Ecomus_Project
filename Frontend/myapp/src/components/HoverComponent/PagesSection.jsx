import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const PagesSection = () => {
    return (
        <div className="container mt-4">
            <ul className=" list-unstyled">
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    About us
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    Brands
                    <span><MdKeyboardArrowRight size={22} /></span>
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    Contact
                    <span><MdKeyboardArrowRight size={22} /></span>
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    FAQ
                    <span><MdKeyboardArrowRight size={22} /></span>
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    Store
                    <span><MdKeyboardArrowRight size={22} /></span>
                </li>
                <li className=" d-flex  align-items-center text-secondary mb-3 ">
                    <p className='position-relative mb-0'>Timeline
                        <span className="badge  bg-success text-white  " style={{ position: 'absolute', top: '-10px', right: '-35px', fontSize: '0.7rem' }} >New</span>
                    </p>
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    View cart
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    Check out
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    Payment
                    <span><MdKeyboardArrowRight size={22} /></span>
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    My account
                    <span><MdKeyboardArrowRight size={22} /></span>
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    Invoice
                </li>
                <li className=" d-flex justify-content-between align-items-center text-secondary mb-3">
                    404
                </li>
            </ul>
        </div>
    );
}

export default PagesSection