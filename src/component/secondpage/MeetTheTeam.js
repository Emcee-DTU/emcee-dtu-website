import { logDOM } from "@testing-library/react";
import React from "react";
import Rectangle_heading1 from "./heading_bullet1.png";
import Rectangle_heading2 from "./heading_bullet2.png";
import Rectangle from "./Rectangle.png";
import profile from "./profile.png"
export default function MeetTheTeam() {
    return (
        <div className="meet-the-team-parent">
            <div className="meet-the-team-heading">
                 <img src={Rectangle_heading1} />
                 <img src={Rectangle_heading2} />
                 <h3>Meet The Team</h3>
            </div>
            <div>
                <div className="meet-the-team-content">
                    <img src={Rectangle} />
                    <div className="meet-the-team-part1">
                        <button id="HarshSharma">
                            <img src={profile} />
                            <h3>Harsh Sharma</h3>
                            <p>Secretary</p>
                        </button>
                        <button id="HarshSharma"><img src={profile} /><h3>Harsh Sharma</h3>
                            <p>Secretary</p></button>
                        <button id="HarshSharma"><img src={profile} /><h3>Harsh Sharma</h3>
                            <p>Secretary</p></button>
                        <button id="HarshSharma"><img src={profile} /><h3>Harsh Sharma</h3>
                            <p>Secretary</p></button>
                        <button id="HarshSharma"><img src={profile} /><h3>Harsh Sharma</h3>
                            <p>Secretary</p></button>
                        <button id="HarshSharma"><img src={profile} /><h3>Harsh Sharma</h3>
                            <p>Secretary</p></button>
                        <button id="HarshSharma"><img src={profile} /><h3>Harsh Sharma</h3>
                            <p>Secretary</p></button>
                        <button id="HarshSharma"><img src={profile} /><h3>Harsh Sharma</h3>
                            <p>Secretary</p></button>
                        <button id="HarshSharma"><img src={profile} /><h3>Harsh Sharma</h3>
                            <p>Secretary</p></button>
                        <button id="HarshSharma"><img src={profile} /><h3>Harsh Sharma</h3>
                            <p>Secretary</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
}