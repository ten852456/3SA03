import React from 'react';
import './App.css';
import WordCard from './WordCard';
const word = "Hello";

function App() {
  return (
  <div>
    <h1 style={{paddingLeft: "30px"}}>Guess the word</h1>

           <WordCard value = {word}/>
  </div>

  );
  } 
export default App;