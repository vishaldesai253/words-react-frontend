import "./App.css";
import Header from "./MyComponents/Header";
import Words from "./MyComponents/Words";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import AddWord from "./MyComponents/AddWord";
const axios = require("axios");

function App() {
  const addWord = (word) => {
    console.log(word);
    let data = {
      crossDomain: true,
      crossOrigin: true,
      word: word,
    };
    axios
      .post("https://my-hack-demo-node.herokuapp.com/addword", data)
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = (word) => {
    console.log("Deleting Word ", word);
    setWords(
      words.filter((e) => {
        return e !== word;
      })
    );
  };

  const [words, setWords] = useState([]);
  const fetchData = React.useCallback(() => {
    axios
      .get("https://my-hack-demo-node.herokuapp.com/getwords")
      .then((response) => {
        let data = response.data;
        console.log(data);
        setWords(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="mx-auto">
      <Header></Header>
      <AddWord addWord={addWord}></AddWord>
      <Words words={words} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
