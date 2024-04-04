import { logDOM } from "@testing-library/react";
import React from "react";
import arrow_image from "./arrow_cards.png"

export default function UpComingEvents_cards({ link, heading, description }) {
    return (
        <div className="card-parent">
            <button onClick={() => window.open(link)}></button>
            <div className="card-child">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </div>
    );

}