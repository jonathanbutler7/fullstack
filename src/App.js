import React from "react";
import "./App.css";
import BookmarksContext from "./BookmarksContext";
import Get from "./Get"
import Post from './Post'
import Patch from "./Patch"
import Delete from "./Delete"

function App() {
  const initialState = {
    bookmarks
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:7000/bookmarks";
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer be59efa6-94c1-494f-bccf-35e04fe2fbfb",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((bookmarks) => initialState['bookmarks'] = bookmarks );
  }
  //initialState['bookmarks'] = bookmarks or initialState.bookmarks = bookmarks
console.log({initialState})
  return (
    <BookmarksContext.Provider
      value={{

      }}
    >
      <div className="">
      <h1>Bookmarks client</h1>
      <Get handleSubmit={handleSubmit} />
      <Post />
      <Patch />
      <Delete />
      
    </div>
    </BookmarksContext.Provider>
    
  );
}

export default App;
