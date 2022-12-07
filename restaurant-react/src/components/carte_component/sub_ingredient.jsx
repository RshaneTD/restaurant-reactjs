import React from "react";

function SubIngredients(props) {
    let x = props.data
    return(
        <article className="sup-ingredient">
            <p>2. Supplementary ingredients</p> 
            <ul>
                {
                    x.suppIngredients.map((i, index)=>{
                        return (
                            <li key={index}>{i}</li>
                        )
                    })
                }
            </ul>
    </article>
   
    )
}

export default SubIngredients