import React from "react";

export default function Navbar() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="navbar-parent">
            <div className="navbar-links">
                <a onClick={() => handleScroll("home")} href="#home">
                    Home
                </a>
                <a onClick={() => handleScroll("about")} href="#about">
                    About
                </a>
                <a onClick={() => handleScroll("events")} href="#events">
                    Events
                </a>
                <a onClick={() => handleScroll("contact")} href="#contact">
                    Contact
                </a>
            </div>
        </div>
    );
}
