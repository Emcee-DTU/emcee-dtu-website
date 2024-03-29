import { logDOM } from "@testing-library/react";
import React from "react";
import Rectangle from "./Rectangle.png";
import Rectangle_heading1 from "./heading_bullet1.png";
import Rectangle_heading2 from "./heading_bullet2.png";
import UpComingEvents_cards from "./UpComingEvents_cards";




export default function UpComingEvents() {
    return (
        <div className="upcoming-events-parent" >
            <div className="upcoming-events-heading">
                 <img src={Rectangle_heading1} />
                 <img src={Rectangle_heading2} />
                 <h3>Upcoming Events</h3>
            </div>
                <div className="upcoming-events-content">
                    <img src={Rectangle} />
                    <div className="upcoming-events-part1">
                        <h3>Dyna-MIC</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu.</p>
                        <div className="cards-craddle">
                            <UpComingEvents_cards link="#" heading="Rhythm & Rhyme" description="Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu." tags="#Poetry" />

                            <UpComingEvents_cards link="#" heading="Rhythm & Rhyme" description="Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu." tags="#Poetry" />

                            <UpComingEvents_cards link="#" heading="Rhythm & Rhyme" description="Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu." tags="#Poetry" />

                            <UpComingEvents_cards link="#" heading="Rhythm & Rhyme" description="Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu." tags="#Poetry" />

                            <UpComingEvents_cards link="#" heading="Rhythm & Rhyme" description="Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu." tags="#Poetry" />

                            <UpComingEvents_cards link="#" heading="Rhythm & Rhyme" description="Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu." tags="#Poetry" />
                            
                            <UpComingEvents_cards link="#" heading="Rhythm & Rhyme" description="Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu." tags="#Poetry" />

                            <UpComingEvents_cards link="#" heading="Rhythm & Rhyme" description="Lorem ipsum dolor sit amet consectetur. Urna in in etiam in malesuada ornare blandit elementum. Leo neque at cras eu imperdiet odio eu." tags="#Poetry" />

                        </div>
                    </div>                  
                </div>
        </div>
    );
}
