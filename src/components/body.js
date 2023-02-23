import React, { useState } from "react";

export default function Body({ addNotes }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    // id:Math.random()*10
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const addNote = (e) => {
    addNotes(note);
    console.log(note);
    e.preventDefault();
    setNote({ title: "", content: "" });
  };
  const handleExpanded = () => {
    setIsExpanded(true);
  };
  return (
    <>
      <main>
        <div>
          <form className="relative w-[600px] mt-[32px] mr-auto mb-[50px] ml-auto shadow-2xl z-50 rounded-md p-2 rounded-md">
            {isExpanded && (
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="w-[100%] mb-[20px] outline-0 bold text-lg"
                onChange={handleChange}
                value={note.title}
              />
            )}

            <p>
              <textarea
                name="content"
                placeholder="Take a note..."
                className="w-[100%] mb-[20px] outline-0 "
                value={note.content}
                onChange={handleChange}
                onClick={handleExpanded}
               rows={isExpanded? 3:1}
              ></textarea>
            </p>
            <button
              className="rounded-full bg-yellow-200 p-4 absolute right-[18px] bottom-[-18px]"
              onClick={addNote}
            ></button>
          </form>
        </div>
      </main>
    </>
  );
}
