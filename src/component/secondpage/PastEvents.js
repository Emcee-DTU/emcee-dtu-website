import { logDOM } from "@testing-library/react";
import React from "react";
import Rectangle_heading1 from "./heading_bullet1.png";
import Rectangle_heading2 from "./heading_bullet2.png";
import Rectangle from "./Rectangle.png";


export default function PastEvents() {
    return (
        <div className="past-events-parent">
            <div className="past-events-heading">
                 <img src={Rectangle_heading1} />
                 <img src={Rectangle_heading2} />
                 <h3>Past Events</h3>
            </div>
            <div className="past-events-content">
                <img src={Rectangle} /> 
                <div className="past-events-part1">
                    <button id="EngiFest2024">Hosting EngiFest 2024!!</button>
                    <button id="Yuvaan2024">Hosting Yuvaan 2024!!</button>
                    <button id="Invictus2024">Hosting Invictus 2024!!</button>
                    <button id="Freshers2024">Hosting Freshers 2024!!</button>
                    <button id="E-Cell2024">Hosting E-Cell 2024!!</button>
                    <button id="EngiFest2023">Hosting Engifest 2023</button>
                </div>
            </div>
        </div>
    );
}