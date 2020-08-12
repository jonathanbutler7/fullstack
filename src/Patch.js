import React, { useContext, useState } from "react";
import BookmarksContext from "./BookmarksContext";

function Patch() {
  const context = useContext(BookmarksContext);
  const [bookmark, setBookmark] = useState();
  const [bookmarkTitle, setBookmarkTitle] = useState();
  const [bookmarkUrl, setBookmarkUrl] = useState();
  const [bookmarkDescription, setBookmarkDescription] = useState();
  const [bookmarkRating, setBookmarkRating] = useState();
  const [bookmarkId, setBookmarkId] = useState();
  console.log(
    bookmarkTitle,
    bookmarkUrl,
    bookmarkDescription,
    bookmarkRating,
    bookmarkId
  );
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
      .then((bookmark) => setSelected(bookmark));
  }

  function setSelected(b) {
    setBookmarkTitle(b.title);
    setBookmarkUrl(b.url);
    setBookmarkDescription(b.descriptions);
    setBookmarkRating(b.rating);
    setBookmarkId(b.id);
  }

  function submitChanges(id) {
    const url = `http://localhost:7000/bookmarks/${id}`;
    const options = {
      method: "PATCH",
      headers: {
        Authorization: "Bearer be59efa6-94c1-494f-bccf-35e04fe2fbfb",
      },
    };
  }

  return (
    <div className="patch">
      <h2>Patch</h2>
      <select name="" id="" onChange={(e) => getBookmark(e.target.value)}>
        <option value="">--Select a bookmark to edit--</option>
        {context.bookmarks ? (
          context.bookmarks.map((bookmark, key) => {
            return (
              <option key={key} value={bookmark.id}>
                {bookmark.id}
              </option>
            );
          })
        ) : (
          <img
            src="https://thumbs.gfycat.com/PotableEmbarrassedFrenchbulldog-small.gif"
            alt=""
          />
        )}
      </select>
      <div className="patch-bookmark-placeholder">
        {bookmarkTitle ? (
          <form
            className="patch-bookmark-placeholder"
            onSubmit={(e) => submitChanges(bookmarkId)}
          >
            <h4>Bookmark ID: {bookmarkId}</h4>
            <label htmlFor="">Title</label>
            <input
              onChange={(e) => setBookmarkTitle(e.target.value)}
              type="text"
              value={bookmarkTitle}
            />
            <label htmlFor="">URL</label>
            <input
              type="text"
              value={bookmarkUrl}
              onChange={(e) => setBookmarkUrl(e.target.value)}
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={bookmarkDescription}
              onChange={(e) => setBookmarkDescription(e.target.value)}
            />
            <label htmlFor="">Rating</label>
            <input
              type="number"
              value={bookmarkRating}
              onChange={(e) => setBookmarkRating(e.target.value)}
            />
            <h4>Edit fields and click submit changes</h4>
            <button>submit changes</button>
          </form>
        ) : (
          <img
            src="https://thumbs.gfycat.com/PotableEmbarrassedFrenchbulldog-small.gif"
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default Patch;
