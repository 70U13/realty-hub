import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate, Link } from 'react-router-dom'

import logo from "../../image/logo/logo-5.png";

const Nav = () => {
  return (
    <>
    <div className="flex py-4 px-8 gap-8 w-full justify-center items-center bg-white nav-1">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px]">
            <img src={logo} alt="Logo" className="md:my-2 w-full max-w-[150px] sm:max-w-[150px] md:max-w-[200px] xl:max-w-[200px]" />
        </Link>
        <div className="flex items-center
            gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 
            text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
            <Link to="/signup" className="cursor-pointer">Properties</Link>
            <Link to="/agents" className="cursor-pointer">For Agents</Link>
            <Link to="/faqs" className="cursor-pointer">FAQs</Link>
            <Link to="/contact-us" className="py-2 px-6 rounded-full bg-[#EA906C] nav-2 cursor-pointer">
            Contact Us
            </Link>
        </div>
    </div>
    </>
    )
};

export default Nav;