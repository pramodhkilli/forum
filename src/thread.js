import React, { useState } from "react";

function Thread({ id, threads }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const thread = threads.find((t) => t.id === id);
  //   const [comments, setComments] = useState(thread.comments);

  const addComment = (com) => {
    setComments([...comments, com]);
    thread.comments.push(com);
    localStorage.setItem("threads", JSON.stringify(threads));
  };

  return (
    <div style={{ padding: "1em" }}>
      <div className="header">
        <h4 className="title">{thread.title}</h4>
        <div
          className="bottom"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className="timestamp" style={{ fontSize: "10px" }}>
            {new Date(thread.date).toLocaleString()}
          </p>
          <span
            className="comment-count"
            style={{ fontSize: "10px", marginLeft: "10px" }}
          >
            {thread.comments.length} comments
          </span>
        </div>
        <p style={{ marginTop: "20px" }}>{thread.content}</p>
      </div>
      <textarea
        style={{ marginTop: "20px" }}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></textarea>
      <br></br>
      <button
        onClick={() =>
          addComment({
            content: comment,
            date: Date.now(),
            author: "Pramodh",
          })
        }
      >
        add comment
      </button>
      <div className="comments">
        {thread.comments.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="top-comment">
              <h5 className="user" style={{ marginTop: "20px" }}>
                {comment.author}
              </h5>
              <p className="comment-ts" style={{ fontSize: "10px" }}>
                {new Date(comment.date).toLocaleString()}
              </p>
            </div>
            <div
              className="comment-content"
              style={{ fontSize: "12px", marginTop: "5px" }}
            >
              {comment.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thread;
