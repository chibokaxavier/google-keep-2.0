import React, { useState } from "react";
import "@/app/globals.css";
import Head from "@/app/head";
import Header from "@/components/header";
import Body from "@/components/body";
import Note from "@/components/note";
import Count from "@/components/count";

export default function Index() {
  const [notes, setNotes] = useState([]);
  const addNotes = (newNote) => {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note, index) => index !== id));
  };
  return (
    <>
      <Head />
      <Header />
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes in Database`
        }
      />
      <Body addNotes={addNotes} />
      <div className="flex">
        {notes.map((note, index) => (
          <div key={index}>
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              deleteNote={deleteNote}
            />
          </div>
        ))}
      </div>
    </>
  );
}
