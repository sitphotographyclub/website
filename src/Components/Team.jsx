import React from "react";
import TeamDetails from "../Databases/TeamDetails";
import TeamCard from "./Teams/TeamCard";
export default function Team() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pl-4 pr-4">
      {TeamDetails.map((member, indx) => {
        console.log(member.Fullname);
        return <TeamCard key={indx} member={member} />;
      })}
    </div>
  );
}
