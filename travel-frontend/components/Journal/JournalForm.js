import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
function JournalForm({ user, postNewEntry }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <div >
      <form
        onSubmit={handleSubmit((data) => {
          let newJournal = { ...data, uid: user.uid };
          let res = postNewEntry(newJournal);
        })}
        className="justify-center max-w-[60vw] line-height: 1rem;"
      >
        <div >
          <input
            type="text"
            placeholder="Where did you go?"
            {...register("location", { required: "Location is required" })}
            
          />
          <p>{errors.location?.message}</p>
        </div>

        <div >
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
            
          />
          <p>{errors.title?.message}</p>
        </div>

        <div >
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
           
          />
          <p>{errors.date?.message}</p>
        </div>
        <div >
          <textarea
            type="textarea"
            placeholder="Write something about .."
            {...register("text", { required: "Text is required" })}
            
          />
          <p>{errors.title?.message}</p>
        </div>
        <br />

        <button
          type="submit"
        >
          Add New Journal
        </button>
      </form>
    </div>
  );
}

export default JournalForm;
