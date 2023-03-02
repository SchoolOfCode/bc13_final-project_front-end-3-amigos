import React from "react";
import { FcEmptyTrash
} from "react-icons/fc";



function JournalCard({ title, location, date, text, id, deleteEntry }) {
  console.log("DATA AT JOUNRAL CARD:", id);

  return (
    <div class="container my-2 mx-auto px-4 md:px-2">
      <div class="flex flex-wrap mx-1 lg:-mx-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3">
          <article class="overflow-hidden rounded-lg shadow-lg">
            <div>
              <header class="flex items-left justify-between leading-tight p-2 md:p-4">
                <h2 class="text-lg">{title}</h2>
                <h6>{date.slice(0,10)}</h6>
              </header>
              <h3 class="text-lg">{location}</h3>
              <p class="text-grey-darker text-sm">{text}</p>
              <FcEmptyTrash
                id={id}
                onClick={(e, id) => {
                  console.log(e.target.id, "id");
                  deleteEntry(e.target.id);
                }}
              />
                
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default JournalCard;
