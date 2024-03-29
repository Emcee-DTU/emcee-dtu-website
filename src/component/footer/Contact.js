import { logDOM } from "@testing-library/react";
import React from "react";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import whatsapp from "./whatsapp.png";
import line from "./line.png"
export default function Contact(){
    return(
        <div className="contact-parent">
            <div className="actual-contact">
                <div className="socials-info">
                    <h3>Got an Event?</h3>
                    <p>Contact us and we will love to cover it!</p>
                    <div className="contact-socials">
                        <button><img src={instagram}/></button>
                        <button><img src={twitter}/></button>
                        <button><img src={whatsapp}/></button>
                    </div>
                </div>
                <div className="contact-number">
                    <div className="person1">
                        <h3>
                            +91231232332323
                        </h3>
                        <h3>Harsh Sharma</h3>
                        <p>Secretary</p>
                    </div>
                    <img src={line} />
                    <div className="person2">
                        <h3>
                            +91231232332323
                        </h3>
                        <h3>Harsh Sharma</h3>
                        <p>Secretary</p>
                    </div>
                </div>
            </div>
            
            <div className="by-love">Made with ♡ by Emcee DTU</div>
        </div>
    );
}