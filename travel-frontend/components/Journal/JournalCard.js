import React from "react";
import { FcEmptyTrash
} from "react-icons/fc";



function JournalCard({ title, location, date, text, id, deleteEntry }) {
  console.log("DATA AT JOUNRAL CARD:", id);

  return (
    <div >
      <div>
        <div >
          <article>
            <div>
              <header >
                <h2 >{title}</h2>
                <h6>{date.slice(0,10)}</h6>
              </header>
              <h3 >{location}</h3>
              <p >{text}</p>
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
