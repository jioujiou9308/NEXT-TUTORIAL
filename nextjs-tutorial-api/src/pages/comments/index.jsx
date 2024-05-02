import { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComment = async () => {
    const response = await fetch("/api/comment");
    const data = await response.json();
    setComments(data);
  };
  const submitComment = async () => {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ comment: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data", data);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button onClick={() => submitComment()}>Submit Comment</button>
      <button onClick={() => fetchComment()}>Load Comment</button>
      {comments.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.id}</h3>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
