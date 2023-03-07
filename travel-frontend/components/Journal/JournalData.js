import React from "react";

import JournalCard from "./JournalCard";

function JournalDataDisplay({ dataJournal, deleteEntry, user }) {
  // console.log(dataJournal);
  return (
    <div className=" card-display-journal lg:grid-cols-3">
      {dataJournal.map((data) => {
        {
          return (
            <JournalCard
              key={data.id}
              title={data.title}
              location={data.location}
              date={data.date}
              text={data.text}
              id={data.id}
              deleteEntry={deleteEntry}
              user={user}
            />
          );
        }
      })}
    </div>
  );
}

export default JournalDataDisplay;
