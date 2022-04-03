import React from "react";
import WordItem from "./WordItem";
function Words(props) {
  let myStyle = {
    minHeight: "60vh",
    width: "70%",
    marginTop: "50px",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center">Words List</h3>
      {props.words.length === 0 ? (
        <p className="fs-2 text-primary text-center">
          No words to display, Please add some words
        </p>
      ) : (
        props.words.map((wordItem) => (
          <WordItem
            wordItem={wordItem}
            key={wordItem.id}
            onDelete={props.onDelete}
          ></WordItem>
        ))
      )}
    </div>
  );
}

export default Words;
