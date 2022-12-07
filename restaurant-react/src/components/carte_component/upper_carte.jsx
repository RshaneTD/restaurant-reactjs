import React from "react";

function UpperCarte(props) {
    let info= props.data
    return (
       <>
             <div className="menu-card--logo">
                <img src={info.icon} alt=""/>
             </div>
             <div className="question-mark"><img src="/img/icon/assets/Question-mark-removebg-preview.png" alt=""/></div>
             <div className="recipe-title">
                <h3>~{info.title}~</h3>
             </div>
       </>
    )
}

export default UpperCarte