import React from "react";

function MainIngredients(props) {
    let x = props.data
    return(
        <article className="main-ingredient">
            <p>1. Main ingredients </p>
            
            <ul>
                {
                    x.mainIngredients.map((i, index)=>{
                        return (
                            <li key={index}>{i}</li>
                        )
                    })
                }
            </ul>

        </article>
    )
}

export default MainIngredients