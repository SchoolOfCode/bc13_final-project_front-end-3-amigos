import React from "react";
import { SlTrash } from "react-icons/sl";

function JournalCard({ title, location, date, text, id, deleteEntry }) {
  console.log("DATA AT JOUNRAL CARD:", id);

  return (
    <div className="bg-red-500 container my-2 px-2 md:px-2">
      {/* <div className="flex flex-wrap mx-1 lg:-mx-4">
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3">
     <article className="overflow-hidden rounded-lg shadow-lg"> */}
      <div>
        <header className="flex items-left justify-between leading-tight p-2 md:p-4">
          <h2 className="text-lg">{title}</h2>
          <h6>{date.slice(0, 10)}</h6>
        </header>
        <h3 className="text-lg">{location}</h3>
        <p className="text-grey-darker text-sm">{text}</p>
        <SlTrash
          id={id}
          onClick={(e) => {
            console.log(e.target.id, "id");
            deleteEntry(e.target.id);
          }}
        />
      </div>
      {/* </article>
        </div>
      </div> */}
    </div>
  );
}

export default JournalCard;
