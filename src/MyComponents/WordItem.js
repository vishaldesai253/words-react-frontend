import React, { useState } from "react";
const axios = require("axios");
function WordItem({ wordItem, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [word, setWord] = useState(wordItem.word);
  const [editWord, setEditWord] = useState(wordItem.word);
  const updateData = (id, word) => {
    const data = {
      id: id,
      word: word,
    };
    axios
      .post("https://my-hack-demo-node.herokuapp.com/updateword", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateWord = () => {
    if (isEditing) {
      // check old word is changed or not
      if (word !== editWord) {
        updateData(wordItem.id, editWord);
        setWord(editWord);
      }
    }
    setIsEditing(!isEditing);
  };

  const deleteData = () => {
    const data = {
      id: wordItem.id,
    };
    axios
      .post("https://my-hack-demo-node.herokuapp.com/deleteword", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    onDelete(wordItem);
  };

  return (
    <div className="input-group mb-3" key={wordItem.id}>
      <div className="w-75 align-items-center">
        {isEditing ? (
          <form>
            <input
              type="text"
              className="form-control-lg m-1"
              value={editWord}
              onChange={(e) => {
                setEditWord(e.target.value);
              }}
            ></input>
          </form>
        ) : (
          <p className="fs-2 text-primary m-1">{word}</p>
        )}
      </div>
      <button className="btn btn-m btn-primary m-1" onClick={updateWord}>
        {isEditing ? "Update" : "Edit"}
      </button>
      <button className="btn btn-m btn-danger m-1" onClick={deleteData}>
        Delete
      </button>
    </div>
  );
}

export default WordItem;
