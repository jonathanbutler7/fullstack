import React, { useContext } from "react";
import BookmarksContext from "./BookmarksContext"

function Get({handleSubmit}) {
    const context = useContext(BookmarksContext);
    console.log(context)
  return (
    <div className="get">
      <h2>Get</h2>

      <form action="">
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Fetch
        </button>
      </form>
    </div>
  );
}

export default Get;
