import React from "react";
import { useForm } from "react-hook-form";

function JournalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <div class="bg-green-200 min-h-screen flex items-center">
      <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="line-height: 1rem;"
        >
          <div class="flex items-center mb-5">
            <input
              type="text"
              placeholder="location"
              {...register("location", { required: "Location is required" })}
              lass="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
            <p>{errors.location?.message}</p>
          </div>

          <div class="flex items-center mb-10">
            <input
              type="text"
              placeholder="title"
              {...register("title", { required: "Title is required" })}
              class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
            <p>{errors.title?.message}</p>
          </div>

          <div class="flex items-center mb-10">
            <input
              type="date"
              placeholder="date"
              {...register("date", { required: "Date is required" })}
              class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            />
            <p>{errors.date?.message}</p>
          </div>
          <div class="flex items-center mb-10">
            <textarea
              type="textarea"
              placeholder="text"
              {...register("text", { required: "Text is required" })}
              class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
              rows="4"
              cols="50"
            />
            <p>{errors.title?.message}</p>
          </div>
          <br />
          <div class="text-right">
            <button
              type="submit"
              class="py-3 px-8 bg-green-500 text-green-100 font-bold rounded"
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
