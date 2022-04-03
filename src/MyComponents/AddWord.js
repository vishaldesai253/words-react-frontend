import React, { useState } from "react";
function AddWord({ addWord }) {
  const [word, setWord] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!word) {
      alert("Word cant be blank");
    } else {
      addWord(word);
      setWord("");
    }
  };
  const myStyle = {
    width: "40%",
    margin: "20px auto",
  };
  return (
    <div className="input-group" style={myStyle}>
      <span className="input-group-text" id="basic-addon1">
        Word
      </span>
      <input
        type="text"
        id="word"
        placeholder="Enter word"
        className="form-control"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-success" onClick={submit}>
        Add Word
      </button>
    </div>
  );
}

export default AddWord;
