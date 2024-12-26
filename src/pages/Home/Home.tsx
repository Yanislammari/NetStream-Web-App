import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Navbar />
      {/* This is a mock for HeroBanner component, I will implement the data recovery system from the server to make this component dynamic. */}
      <HeroBanner backgroundImage="https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABU0mi6aPR8UMyIvzScWQKmhvT2V0mK29NE0nK8-i36tGa7Htc3e57tm2dFtgpI63SZBBsO8BuzDzaqF9PQIKjT6SvP-mu-MAQ7ZC.jpg?r=a57" title="The Walking Dead" subtitle="The story follows the character of Rick Grimes (played by Andrew Lincoln), a sheriff's deputy in Kings County (Georgia). He wakes up from a coma of several weeks to discover that the population has been ravaged by an unknown epidemic which transforms human beings into undead, called 'walkers'." />
    </div>
  );
};

export default Home;
