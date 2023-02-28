import React from "react";

function JournalCard({ title, location, date, text }) {
  console.log("DATA AT JOUNRAL CARD:", title, location, date, text);
  return (
  <div>
    <h2>{title}</h2>
    <h3>{location}</h3>
    <p>{text}</p>
    <h6>{date}</h6>

  </div>
  )
}

export default JournalCard;
