import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate, Link } from 'react-router-dom'

import logo from "../../image/logo/logo-3.png";

const Nav = () => {
  return (
    <>
    <div className="flex gap-8 py-4 justify-center items-center bg-white nav-1">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Logo" className="w-[200px] lg:w-[200px]" />
        </Link>
        <div className="flex gap-8">
            <p>Properties</p>
            <p>For Agents</p>
            <p>FAQs</p>
            <p>Contact Us</p>
        </div>
    </div>
    </>
  )
};

export default Nav;