import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate, Link } from 'react-router-dom'
import Navbar from "./Nav";
import SignUp from "./form/Registration";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <SignUp />
      </div>
    </>
  );
};

export default Home;