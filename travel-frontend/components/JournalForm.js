import React from "react";
import { useForm } from "react-hook-form";

function JournalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <div>
      <form onSubmit={handleSubmit(data => {
				console.log(data);})}>
        <input type="text" placeholder="location" {...register("location", { required: "Location is required" })}/>
        <p>{errors.location?.message}</p>
        <input type="text" placeholder="title" {...register("title", { required: "Title is required" })}/>
        <p>{errors.title?.message}</p>
        <input type="date" placeholder="date" {...register("date", { required: "Date is required" })}/>
        <p>{errors.date?.message}</p>
        <input type="text" placeholder="text" {...register("text", { required: "Text is required" })}/>
        <p>{errors.title?.message}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>helooo</p>
    </div>
  );
}

export default JournalForm;
