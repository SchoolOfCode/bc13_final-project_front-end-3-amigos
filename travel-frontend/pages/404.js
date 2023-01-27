import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <div className="not-found">
        <h1 className="p-4">Oooops...</h1>
        <h2 className=" text-5xl pb-4 ">404 | Page Not Found </h2>
        <p>
          Go back to the <Link href="/">Homepage</Link>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
