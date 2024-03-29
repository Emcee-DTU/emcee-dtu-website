import { logDOM } from "@testing-library/react";
import React from "react";
// import logo from "./reactjs-icon.png";

export default function Navbar(){
    return (
        <div className="navbar-parent">
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#events">Events</a>
                <a href="#contact">Contact</a>
            </div>
            
        </div>
    );
}
