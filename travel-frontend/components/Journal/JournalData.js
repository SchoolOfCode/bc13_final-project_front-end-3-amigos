import React from "react";

import JournalCard from "./JournalCard";

function JournalDataDisplay({ dataJournal, deleteEntry }) {
  // console.log(dataJournal);
  return (
    <div className="grid lg:grid-cols-3 gap-2 mt-10">
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
            />
          );
        }
      })}
    </div>
  );
}

export default JournalDataDisplay;
