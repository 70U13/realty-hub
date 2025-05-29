import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate, Link } from 'react-router-dom'


import Agent from "./Agents";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Agent />
      </div>
    </>
  );
};

export default Home;