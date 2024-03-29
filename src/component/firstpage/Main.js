import { logDOM } from "@testing-library/react";
import React from "react";
import logo from "./logo.png";
import mic from "./mic.png";
import mic_button from "./mic_button.png";
import mic_button_arrow from "./maki--arrow (1).svg";

export default function Main(){
    return (
        <div className="first-main-master">
            <div className="first-main-parent">
                <div className="first-main-info">
                    <img src={logo} alt="mainlogo"/>
        
                    <p>Lorem ipsum dolor sit amet consectetur. Habitant laoreet nibh purus condimentum sit fames ut vitae. Elementum tempus amet pellentesque in urna justo duis nunc pellentesque. Ac mauris a pellentesque vulputate lacinia tellus. Dui vitae id dui fames morbi sit amet.</p>
        
                    <button className="registration-button" >
                        <img src={mic_button} />
                        <div className="button-content">
                            <div className="dynamic">DynaMIC</div>   
                            <div className="register">Register Here
                                <img src={mic_button_arrow} />
                            </div>
                        </div>
                    </button>
        
                </div>
                <div>
                    <img src={mic} className="main-mic" />
                </div>
            </div>
        </div>   
    );
}