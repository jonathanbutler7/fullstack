import React from "react";
import "./App.css";

function App() {
  function handleSubmit(e) {
    e.preventDefault()
    const url = "http://localhost:7000/bookmarks"
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer be59efa6-94c1-494f-bccf-35e04fe2fbfb"
      }
    }
    fetch(url, options)
    .then(res => res.json)
    .then(bookmarks => console.log(bookmarks))
  }

  return (
    <div className="">
      <h1>Bookmarks client</h1>
      <form action="">
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Fetch
        </button>
      </form>
    </div>
  );
}

export default App;
