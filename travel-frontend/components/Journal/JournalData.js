import React from "react";

import JournalCard from "./JournalCard";

const journalData = [
  {
    title: "best trip",
    location: "Barcelona",
    date: "2023-08-02",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "best trip",
    location: "London",
    date: "2023-08-02",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "best trip",
    location: "Coventry",
    date: "2023-08-02",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "best trip",
    location: "Birmingham",
    date: "2023-08-02",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function JournalDataDisplay({ journal }) {
  return (
    <div>
      {journalData.map((data) => {
        {
          return (
            <JournalCard
              title={data.title}
              location={data.location}
              date={data.date}
              text={data.text}
            />
          );
        }
      })}
    </div>
  );
}

export default JournalDataDisplay;
