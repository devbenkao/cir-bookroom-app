import React from "react";
import "./App.css";

const HomePage = () => {
  return (
    <div>
      <h1>Church In Richardson Book Room</h1>

      <button>Check out a new book</button>
      <button>Return a book</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
