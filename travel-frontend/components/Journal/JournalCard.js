import React from "react";
import { SlTrash } from "react-icons/sl";

function JournalCard({ title, location, date, text, id, deleteEntry }) {
  // console.log("DATA AT JOUNRAL CARD:", id);

  return (
    <div className="card-display-journal  bg-pink-200 container rounded-xl my-2 px-2 md:px-2 mx-20">
      {/* <div className="flex flex-wrap mx-1 lg:-mx-4">
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3">
     <article className="overflow-hidden rounded-lg shadow-lg"> */}
      <div>
        <header className="flex items-left justify-between leading-tight pl-2 md:pl-4 pt-8">
          <h2 className="text-xl font-bold leading-tight ">{title}</h2>
          <h6 className="italic ">{date.slice(0, 10)}</h6>
        </header>
        <h3 className="text-lg font-bold flex items-left justify-between leading-tight pl-2 md:pl-4">
          {location}
        </h3>
        <p className="text-grey-darker text-lg flex items-left justify-between leading-tight p-2 md:p-4 text-justify">
          {text}
        </p>
        <SlTrash
          className="justify-between leading-tight ml-auto h-7 w-7 mr-5 mb-5"
          id={id}
          onClick={(e) => {
            // console.log(e.target.id, "id");
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
