import React from "react";
import Link from "next/link";

// right now this is mapping out an array of notes and generating them using [id].js as template

const NotesIndex = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));
  //above we are creating a new array of 15 items
  //then using the fill method to give them a value of 1
  //then maping over and using the index to give it and id name and index

  return (
    <div>
      <h1>Notes</h1>
      {/*below we are mapping over 
      our array of notes and displaying it as a list of links */}
      {notes.map((note) => (
        <div>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NotesIndex;
