import React from "react";
import TeamDetails from "../Databases/TeamDetails";
import TeamCard from "./Teams/TeamCard";
import "./design.css"
import { Helmet } from "react-helmet";

export default function Team() {
  
  return (
    <div className="bg-black">
      <Helmet>
        <title>Team | SIT Photography Club</title>
        <meta
          name="description"
          content="Meet the passionate team behind SIT Photography Club. Our dedicated members are committed to fostering creativity and community in photography."
        />
        <meta
          name="keywords"
          content="SIT Photography Club team, photography club leaders, photography enthusiasts, photography community"
        />
        <link rel="canonical" href="https://www.sitphotography.club/team" />
      </Helmet>
    <h1 className="text-white text-center p-4 Heading font-serif">Our Team</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pl-4 pr-4 bg-black">
      {TeamDetails.map((member, indx) => {
        console.log(member.Fullname);
        return <TeamCard key={indx} member={member} />;
      })}
    </div>
    </div>
  );
}
