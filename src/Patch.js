import React, { useContext, useState } from "react";
import BookmarksContext from "./BookmarksContext";

function Patch() {
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
  console.log(bookmark);

  return (
    <div className="patch">
      <h2>Patch</h2>
      <select name="" id="" onChange={(e) => getBookmark(e.target.value)}>
        <option value="">--Select a bookmark to edit--</option>
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
        <input
          onChange={(e) => console.log(e.target.value)}
          type="text"
          value={bookmark.title}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Patch;
