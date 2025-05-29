import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Nav";

const Layout = () => {

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#EEE2DE]">

      {/*<Navbar/>*/}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/*<Footer/>*/}
    </div>
  );
};

export default Layout;
