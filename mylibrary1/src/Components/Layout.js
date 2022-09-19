import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import {Outlet} from "react-router-dom";
// import Slider1 from "./Slider1"
// import Slider from './Slider1';


function Layout() {
    return (
        <div>
            <Navbar title="My Library" aboutText="About Us" addBook="Add Book" /> 
            <Outlet/>
            <Footer fbalt="Loading Fb Image" lnkalt="Loading Fb Image" instaalt="Loading Fb Image" gitalt="Loading Fb Image" />
        </div>
    )
}

export default Layout
