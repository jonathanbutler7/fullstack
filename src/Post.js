import React, { useState } from "react";

function Post() {
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [description, setDescription] = useState();
  const [rating, setRating] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:7000/bookmarks";
    const options = {
      method: "POST",
      headers: {
        Authorization: "Bearer be59efa6-94c1-494f-bccf-35e04fe2fbfb",
      },
    };
    const body = {
      title: title,
      url: url,
      descriptions: description,
      rating: rating,
    };
  }
  console.log(title, url, description, rating);
  return (
    <div className="post">
      <h2>Post</h2>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
        <label htmlFor="">Url</label>
        <input onChange={(e) => setUrl(e.target.value)} type="text" />
        <label htmlFor="">Description</label>
        <input onChange={(e) => setDescription(e.target.value)} type="text" />
        <label htmlFor="">Rating</label>
        <select onChange={(e) => setRating(e.target.value)} name="" id="">
          <option value="">--Select a rating--</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
        <button type="submit">Post bookmark</button>
      </form>
    </div>
  );
}

export default Post;
