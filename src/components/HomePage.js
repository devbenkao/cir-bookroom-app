import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Church In Richardson Book Room
      </h1>

      <div className="flex flex-col items-center">
        <Link
          to="/checkout"
          className="bg-green-500 text-white px-4 py-2 mb-4 w-full transition-transform transform active:scale-95"
        >
          Check out new book
        </Link>
        <button className="bg-blue-500 text-white px-4 py-2 w-full transition-transform transform active:scale-95">
          Return a book
        </button>
      </div>
    </div>
  );
};

export default HomePage;
