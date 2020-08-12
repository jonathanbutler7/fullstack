import React from "react";

function Get({handleSubmit}) {
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
