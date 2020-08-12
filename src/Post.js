import React from 'react'

function Post() {
    return (
        <div className="post">
            <h2>Post</h2>
            <form action="">
                <label htmlFor="">Title</label>
                <input type="text"/>
                <label htmlFor="">Url</label>
                <input type="text"/>
                <label htmlFor="">Description</label>
                <input type="text"/>
                <label htmlFor="">Rating</label>
                <select name="" id="">
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
    )
}

export default Post
