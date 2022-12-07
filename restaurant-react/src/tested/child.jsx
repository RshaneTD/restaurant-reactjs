import React from "react";

function Child(props){
    return(
        <div className="child">
            <h1>child</h1>
            <button onClick={() => props.changeWord("anna")}>click to change title</button>
        </div>
    )
}

export default Child