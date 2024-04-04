import { logDOM } from "@testing-library/react";
import React from "react";
import Rectangle from "./Rectangle.png";
import Rectangle_heading1 from "./heading_bullet1.png";
import Rectangle_heading2 from "./heading_bullet2.png";
import UpComingEvents_cards from "./UpComingEvents_cards";




export default function UpComingEvents() {
    return (
        <div className="upcoming-events-parent" id="events" >
            <div className="upcoming-events-heading">
                <img src={Rectangle_heading1} />
                <img src={Rectangle_heading2} />
                <h3>Upcoming Events</h3>
            </div>
            <div className="upcoming-events-content">
                <img src={Rectangle} />
                <div className="upcoming-events-part1">
                    <h3>DynaMIC</h3>
                    <p>Presenting, To Catch a Drift, DynaMIC, an open-mic competition with the hope that you will present your art of receptivity! </p>
                    <div className="cards-craddle">
                        <UpComingEvents_cards link="https://unstop.com/p/emcee-dtu-dynamic-dtu-new-delhi-935238"
                            heading="Register for DynaMIC"
                            description="Participants can bring their style to the stage, weaving tales, sharing laughter, or delivering powerful spoken-word performances."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
