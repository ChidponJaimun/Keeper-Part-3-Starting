import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function textHandle(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "title") {
      setNote((prevValue) => {
        return { title: value, content: prevValue.content };
      });
    } else if (name === "content") {
      setNote((prevValue) => {
        return { title: prevValue.content, content: value };
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={textHandle} name="title" placeholder="Title" />
        <textarea
          onChange={textHandle}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.onAdd(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
