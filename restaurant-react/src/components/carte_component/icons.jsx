import React from "react";

function Icons(props){
    let info = props.data
    return (
        <div className="icons">
            <div className="prepTimer ">
                <span>{info.time}</span><img src="/src/assets/icon/assets/timer.png" alt=""/> 
            </div>
            <div className="rating ">
            <span>{info.rating}</span><img src="/src/assets/icon/assets/star.png" alt=""/>
            </div>
            <div className="non-veg">
            <span>{info.isveg}</span><img src="/src/assets/icon/assets/non_veg.png" alt=""/>
            </div>
        </div>
    )
}
export default Icons



