import { logDOM } from "@testing-library/react";
import React from "react";
import Rectangle from "./Rectangle.png";
import Rectangle_heading1 from "./heading_bullet1.png";
import Rectangle_heading2 from "./heading_bullet2.png";
import AreWe from "./whoarewe.png";


export default function WhoAreWe() {
    return (
        <div className="who-are-we-parent" id="about">
            <div className="who-are-we-heading">
                <div >
                    <img src={Rectangle_heading1} />
                    <img src={Rectangle_heading2} />
                </div>
                <h3>WHO ARE WE?</h3>
            </div>
            <div className="who-are-we-content">
                <div className="who-are-we-content-part1">
                    <img src={Rectangle} className="" />
                    <p className="who-are-we-content-para">
                        EMCEE DTU stands as the premier anchoring society at Delhi Technological University, renowned for its dynamic energy and impeccable event management prowess. With a talented team of anchors, we bring a perfect blend of charisma and professionalism to every occasion, ensuring seamless execution and unforgettable experiences. From academic symposiums to cultural extravaganzas, EMCEE DTU has left an indelible mark on a diverse array of events, setting the standard for excellence in anchoring.
                        <br />
                        <br />
                        Beyond our anchoring expertise, EMCEE DTU fosters a supportive community where members can develop their skills and forge lasting connections. Through collaborative efforts and shared passion, our members thrive in an environment that encourages personal growth and professional development. Join us in our journey as we continue to redefine the art of anchoring and event management at DTU."
                    </p>
                </div>

                <img src={AreWe} className="who-are-we-img" />
            </div>
        </div>
    );
}