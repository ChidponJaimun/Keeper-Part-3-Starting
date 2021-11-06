import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNote, setAllNote] = useState([]);

  function addNote(newNote) {
    setAllNote((prevItems) => {
      // console.log(allNote);
      return [...prevItems, newNote];
    });
  }

  function deleteNote(id) {
    setAllNote((prevItems) => {
      // console.log(allNote);
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {allNote.map((atNowVal, index) => (
        <Note key={index} id={index} obj={atNowVal} onClick={deleteNote} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
