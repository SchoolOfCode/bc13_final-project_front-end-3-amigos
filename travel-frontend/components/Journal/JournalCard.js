import React from "react";
import { SlTrash } from "react-icons/sl";

function JournalCard({ title, location, date, text, id, deleteEntry, user }) {
  // console.log("DATA AT JOUNRAL CARD:", id);

  return (
    <div className="container px-2 mx-20 my-2 text-black bg-pink-200 card-display-journal rounded-xl md:px-2">
      <div>
        <header className="flex justify-between pt-8 pl-2 leading-tight items-left md:pl-4">
          <h2 className="text-2xl font-bold leading-tight ">{title}</h2>
          <SlTrash
            className="justify-between mb-5 ml-auto mr-5 leading-tight h-7 w-7"
            id={id}
            onClick={(e) => {
              // console.log(e.target.id, "id");
              deleteEntry(e.target.id);
            }}
          />
        </header>
        <h3 className="flex justify-between pl-2 text-lg font-bold leading-tight items-left md:pl-4">
          {location}
        </h3>
        <p className="flex justify-between p-2 text-lg leading-tight text-justify items-left md:p-4">
          {text}
        </p>
        <h6 className="pb-5 pr-10 italic text-right">
          {user.displayName}, {date.slice(0, 10)}
        </h6>
      </div>
    </div>
  );
}

export default JournalCard;
