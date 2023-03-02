import React from "react";

function JournalCard({ title, location, date, text }) {
  // console.log("DATA AT JOUNRAL CARD:", title, location, date, text);
  return (
    <div class="container my-2 mx-auto px-4 md:px-2">
      <div class="flex flex-wrap mx-1 lg:-mx-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3">
          <article class="overflow-hidden rounded-lg shadow-lg">
            <div>
              <header class="flex items-left justify-between leading-tight p-2 md:p-4">
                <h2 class="text-lg">{title}</h2>
                <h6>{date}</h6>
              </header>
              <h3 class="text-lg">{location}</h3>
              <p class="text-grey-darker text-sm">{text}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default JournalCard;
