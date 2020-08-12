import React, { useContext, useState } from "react";
import BookmarksContext from "./BookmarksContext";

function Delete() {
  const context = useContext(BookmarksContext);
  const [bookmark, setBookmark] = useState();

  function getBookmark(id) {
    const url = `http://localhost:7000/bookmarks/${id}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer be59efa6-94c1-494f-bccf-35e04fe2fbfb",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((bookmark) => setBookmark(bookmark));
  }

  function handleDelete(id) {
    const url = `http://localhost:7000/bookmarks/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer be59efa6-94c1-494f-bccf-35e04fe2fbfb",
      },
    };
    fetch(url, options);
  }
  return (
    <div className="delete">
      <h2>Delete</h2>
      <label htmlFor="">Enter ID</label>
      <select name="" id="" onChange={(e) => getBookmark(e.target.value)}>
        <option value="">--Select a bookmark to delete--</option>
        {context.bookmarks
          ? context.bookmarks.map((bookmark, key) => {
              return (
                <option key={key} value={bookmark.id}>
                  {bookmark.id}
                </option>
              );
            })
          : ""}
      </select>
      {bookmark ? (
        <div>
          <h1>{bookmark.title}</h1>
          <h4>{bookmark.descriptions}</h4>
          <h4>{bookmark.url}</h4>
          <h4>{bookmark.rating}</h4>
          <h4>
            <u>ID:{bookmark.id}</u>
          </h4>
          <button onClick={(e) => handleDelete(bookmark.id)} type="submit">
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Delete;
