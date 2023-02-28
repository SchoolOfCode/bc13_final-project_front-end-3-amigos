import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function JournalForm({ user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const URL = `${process.env.NEXT_PUBLIC_POST_JOURNAL_URL}/${user.uid}`;

  async function postNewEntry(newJournal) {
    let res = await axios.post(URL, newJournal);
    return res;
  }

  return (
    <div className="bg-green-200 min-h-screen flex items-center">
      <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
        <form
          onSubmit={handleSubmit((data) => {
            let newJournal = { ...data, uid: user.uid };

            let res = postNewEntry(newJournal);
            console.log("AXIOS RESPONSEL", res);
          })}
          classNameName="line-height: 1rem;"
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
          <div className="text-right">
            <button
              type="submit"
              className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded"
            >
              Add New Journal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JournalForm;
