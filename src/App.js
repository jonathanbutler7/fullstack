import React, { useState, useEffect } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import BookmarksContext from "./BookmarksContext";
import Get from "./Get";
import Post from "./Post";
import Patch from "./Patch";
import Delete from "./Delete";
import Navbar from "./Navbar";

function App() {
  const [bookmarks, setBookmarks] = useState({});
  const initialState = bookmarks;
  function initialFetch() {
    const url = "http://localhost:7000/bookmarks";
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer be59efa6-94c1-494f-bccf-35e04fe2fbfb",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((bookmarks) => setBookmarks({ bookmarks }));
  }
  useEffect(() => {
    initialFetch();
  }, []);
  return (
    <BrowserRouter>
      <BookmarksContext.Provider
        value={{
          bookmarks: initialState.bookmarks,
        }}
      >
        <div className="">
          <h1>Bookmarks client</h1>
          <Navbar />
          <Route exact path="/get" component={Get} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/patch" component={Patch} />
          <Route exact path="/delete" component={Delete} />
        </div>
      </BookmarksContext.Provider>
    </BrowserRouter>
  );
}

export default App;
