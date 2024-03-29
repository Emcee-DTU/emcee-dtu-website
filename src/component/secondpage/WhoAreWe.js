import { logDOM } from "@testing-library/react";
import React from "react";
import Rectangle from "./Rectangle.png";
import Rectangle_heading1 from "./heading_bullet1.png";
import Rectangle_heading2 from "./heading_bullet2.png";
import AreWe from "./whoarewe.png" ;


export default function WhoAreWe() {
    return(
        <div className="who-are-we-parent">
            <div className="who-are-we-heading">
                <div >
                    <img src={Rectangle_heading1} />
                    <img src={Rectangle_heading2} />
                </div>
                <h3>WHO ARE WE?</h3>
            </div>
            <div className="who-are-we-content">
                <div className="who-are-we-content-part1">
                <img src={Rectangle} />
                <p className="who-are-we-content-para">Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu. Faucibus aliquam enim mattis non. Sed pellentesque sed vitae varius. Imperdiet eget tincidunt est rhoncus id. A nunc venenatis in erat mauris. Nunc at sit lacus a aliquam. Aliquam urna donec augue volutpat aliquam consectetur sem luctus. Donec malesuada at risus enim in malesuada viverra id. Sit volutpat consectetur amet sed condimentum lacus ut neque. Donec ut non amet faucibus.</p>
                </div>
                
                <img src={AreWe} />
            </div>
        </div>
    );
}