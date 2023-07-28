import React, { useState } from "react";
import "./styles.css";
var emojipedia = {
  "😊": "smiling",
  "😑": "annoyance",
  "😉": "wink",
  "😴": "sleepy",
  "😭": "crying",
  "😡": "angry",
  "😔": "sad",
  "👍": "like",
  "👎": "dislike",
  "❤️": "love"
};
var emojis = Object.keys(emojipedia);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(input) {
    var userInput = input.target.value;
    var meaning = emojipedia[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our databade";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojipedia[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <header>Inside Outtt!</header>
      <input onChange={emojiInputHandler} />
      <h3>{meaning}</h3>
      <h2>Emojis that we have</h2>
      <ul>
        {emojis.map(function (emoji) {
          return (
            <span class="back" onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </span>
          );
        })}
      </ul>
      <div style={{ paddingBottom: "" }}> </div>
      <footer
        style={{
          backgroundImage: `url(${require("./emojis.jpg")})`
        }}
      ></footer>
    </div>
  );
}
