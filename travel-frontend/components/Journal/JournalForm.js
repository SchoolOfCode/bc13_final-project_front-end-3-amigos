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
    <div className="bg-gray-300 p-10 md:w-2/3 rounded lg:max-h-[55vh] flex items-center justify-center mx-auto  lg:w-1/2 ">
      <form
        onSubmit={handleSubmit((data) => {
          let newJournal = { ...data, uid: user.uid };
          let res = postNewEntry(newJournal);
        })}
        className="justify-center max-w-[60vw] line-height: 1rem;"
      >
        <div className="flex items-center mb-5 mt-10">
          <input
            type="text"
            placeholder="Where did you go?"
            {...register("location", { required: "Location is required" })}
            className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
          <p className="text-black">{errors.location?.message}</p>
        </div>

        <div className="flex items-center mb-10">
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
            className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
          <p className="text-black">{errors.title?.message}</p>
        </div>

        <div className="flex items-center mb-10">
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
          <p className="text-black">{errors.date?.message}</p>
        </div>
        <div className="flex items-center mb-5">
          <textarea
            type="textarea"
            placeholder="Write something about .."
            {...register("text", { required: "Text is required" })}
            className="text-black border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            rows="4"
            cols="50"
          />
          <p className="text-black">{errors.title?.message}</p>
        </div>
        <button
          type="submit"
          className="journal-submit-btn text-black"
          // className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded mx-auto"
        >
          Add New Journal
        </button>
      </form>
    </div>
  );
}

export default JournalForm;
