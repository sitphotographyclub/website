import React from "react";
import TeamDetails from "../Databases/TeamDetails";
import TeamCard from "./Teams/TeamCard";
export default function Team() {
  return (
    <div>
      {TeamDetails.map((member, indx) => {
        console.log(member.Fullname);
        return <TeamCard key={indx} member={member} />;
      })}
    </div>
  );
}
