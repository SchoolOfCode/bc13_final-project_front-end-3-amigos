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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="location" />
        <input type="text" placeholder="title" />
        <input type="text" placeholder="date" />
        <input type="text" placeholder="text" />

        <br />
        <button type="submit">Submit</button>
      </form>
      <p>helooo</p>
    </div>
  );
}

export default JournalForm;
