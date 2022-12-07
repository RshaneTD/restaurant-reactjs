import React from "react";
import { useState } from "react";
import Child from "./child"
import './test.css'
function Test(){
  const [word, setWord] = useState("parent")
    return(
         <div className="parent">
            <h1>{word}</h1>
            <Child changeWord={word => setWord(word)}/>
         </div>
         
    )
}

export default Test