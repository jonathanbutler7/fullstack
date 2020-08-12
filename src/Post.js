import React, { useState } from "react";
import { Link } from "react-router-dom"
function Post() {
  const [title, setTitle] = useState();
  const [url1, setUrl] = useState();
  const [description, setDescription] = useState();
  const [rating, setRating] = useState();

  function handleRating(e) {
    setRating(e);
    console.log(rating);
  }
  function handleSubmit(e) {
    e.preventDefault()

    if (title && url1 && description && rating) {
    //   console.log("-----e.target-----", e.target);
    //   console.log(title, url1, description, rating);
      const url = "http://localhost:7000/bookmarks";
      const body = {
        title: title,
        url: url1,
        descriptions: description,
        rating: parseInt(rating),
      };
      const options = {
        method: "POST",
        headers: {
          Authorization: "Bearer be59efa6-94c1-494f-bccf-35e04fe2fbfb",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      };
      
      fetch(url, options)
      //first .then sends a promise
        .then((res) => res.json())
        //second .then sends another promise
        // .then((data) => console.log("+++++++++", data))
        // .catch((error) => console.log("error=======", error));
    }
  }

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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <Link to="/get" >
        <button type="submit">Post bookmark</button> 
        </Link>
        
      </form>
    </div>
  );
}

export default Post;
