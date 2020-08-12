import React, { useContext, useState } from "react";
import BookmarksContext from "./BookmarksContext";
import { Link } from "react-router-dom";

function Get({ handleSubmit }) {
  const context = useContext(BookmarksContext);
  const [bookmarkWithId, setBookmarkWithId] = useState("");
  function getBookmarkId(id) {
    const url = `http://localhost:7000/bookmarks/${id}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer be59efa6-94c1-494f-bccf-35e04fe2fbfb",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((bookmarkSpecific) => displayIdBookmark(bookmarkSpecific));
  }

  function displayIdBookmark(bookmark) {
    setBookmarkWithId(bookmark);
  }
  function resetBookmark() {
    setBookmarkWithId("")
  }
  return (
    <div className="get">
      <h2>Get</h2>
      {context.bookmarks && !bookmarkWithId
        ? context.bookmarks.map((bookmark, key) => {
            return (
              <div key={key} className="bookmark-list-item">
                <h4 onClick={(e) => getBookmarkId(bookmark.id)}>
                  Title:{bookmark.title} ID:{bookmark.id}
                </h4>
                <p>{bookmark.url}</p>
                <p>{bookmark.descriptions}</p>
                <p>{bookmark.rating}</p>
              </div>
            );
          })
        : ""}
      {bookmarkWithId ? (
        <div className="bookmark-list-item">
          <h4 onClick={(e) => getBookmarkId(bookmarkWithId.id)}>
            Title:{bookmarkWithId.title} ID:{bookmarkWithId.id}
          </h4>
          <p>{bookmarkWithId.url}</p>
          <p>{bookmarkWithId.descriptions}</p>
          <p>{bookmarkWithId.rating}</p>
        </div>
      ) : (
        ""
      )}
      <button onClick={e => resetBookmark()}>Back to all</button>
      {/* <form action="">
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Fetch
        </button>
      </form> */}
    </div>
  );
}

export default Get;
