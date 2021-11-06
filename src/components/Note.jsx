import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.obj.title}</h1>
      <p>{props.obj.content}</p>
      <button onClick={() => props.onClick(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
