import React, { useContext } from "react";
import BookmarksContext from "./BookmarksContext";

function Get({ handleSubmit }) {
  const context = useContext(BookmarksContext);
  console.log(context);
  return (
    <div className="get">
      <h2>Get</h2>
      {context.bookmarks
        ? context.bookmarks.map((bookmark, key) => {
            return (
              <div className="bookmark-list-item">
                <h4>Title:{bookmark.title} ID:{bookmark.id}</h4>
                <p>{bookmark.url}</p>
                <p>{bookmark.descriptions}</p>
                <p>{bookmark.rating}</p>
              </div>
            );
          })
        : ""}
      <form action="">
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Fetch
        </button>
      </form>
    </div>
  );
}

export default Get;
