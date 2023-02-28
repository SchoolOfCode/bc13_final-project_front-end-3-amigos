import React from "react";
import { useForm } from "react-hook-form";

function JournalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="line-height: 1rem;"
    >
      <input
        type="text"
        placeholder="location"
        {...register("location", { required: "Location is required" })}
      />
      <p>{errors.location?.message}</p>
      <input
        type="text"
        placeholder="title"
        {...register("title", { required: "Title is required" })}
      />
      <p>{errors.title?.message}</p>
      <input
        type="date"
        placeholder="date"
        {...register("date", { required: "Date is required" })}
      />
      <p>{errors.date?.message}</p>
      <textarea
        type="textarea"
        placeholder="text"
        {...register("text", { required: "Text is required" })}
        rows="4"
        cols="50"
      />
      <p>{errors.title?.message}</p>
      <br />
      <button type="submit">Add New Journal</button>
    </form>
  );
}

export default JournalForm;
