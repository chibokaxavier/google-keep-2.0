import React from "react";

export default function Note({ title, content, deleteNote, id }) {
  return (
    <div className="flex">
      <div className=" p-5 m-4 w-fit h-fit  min-h-[75px] min-w-[150px] border-2 border-md">
        <h1 className="text-2xl">{title}</h1>
        <h5>{content}</h5>
        <button className="p-2 bg-yellow-200" onClick={()=>deleteNote(id)}> Delete </button>
      </div>
    </div>
  );
}
