import React from "react";
import Main from "./component/firstpage/Main.js"
import Navbar from "./component/firstpage/Navbar.js"
import WhoAreWe from "./component/secondpage/WhoAreWe.js";
import UpcomingEvents from "./component/secondpage/UpComingEvents.js";
import PastEvents from "./component/secondpage/PastEvents.js";
import MeetTheTeam from "./component/secondpage/MeetTheTeam.js";
import Contact from "./component/footer/Contact.js";
function App() {
  return(

    <div className="god">

      <div className="for-background">
      <Navbar />
      <Main />
      </div>

      <WhoAreWe />
      <UpcomingEvents />
      <PastEvents />
      <MeetTheTeam />
      <Contact />

    </div>
    
  )
}

export default App;
	