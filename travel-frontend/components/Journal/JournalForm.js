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
    <div className="bg-gray-100 max-h-screen lg:max-h-[75vh] flex items-center mx-auto  lg:w-1/2">
      <div className="bg-white p-10 md:w-2/3 max-h-[80%] mx-auto rounded">
        <form
          onSubmit={handleSubmit((data) => {
            let newJournal = { ...data, uid: user.uid };
            let res = postNewEntry(newJournal);
          })}
          className="justify-center max-w-[60vw] line-height: 1rem;"
        >
          <div className="flex items-center mb-5">
            <input
              type="text"
              placeholder="Where did you go?"
              {...register("location", { required: "Location is required" })}
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
            <p>{errors.location?.message}</p>
          </div>

          <div className="flex items-center mb-10">
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
            <p>{errors.title?.message}</p>
          </div>

          <div className="flex items-center mb-10">
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
            <p>{errors.date?.message}</p>
          </div>
          <div className="flex items-center mb-10">
            <textarea
              type="textarea"
              placeholder="Write something about .."
              {...register("text", { required: "Text is required" })}
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
              rows="4"
              cols="50"
            />
            <p>{errors.title?.message}</p>
          </div>
          <br />
          
            <button
              type="submit"
              className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded mx-auto"
            >
              Add New Journal
            </button>
    
        </form>
      </div>
    </div>
  );
}

export default JournalForm;
