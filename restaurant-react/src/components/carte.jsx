import React from "react";

import Icons from './carte_component/icons'
import MainIngredient from "./carte_component/main_ingredient";
import SubIngredient from "./carte_component/sub_ingredient";
import UpperCarte from "./carte_component/upper_carte";

function Main(props){ 
    let data= props.data
    return(
       <div className="menu-container">
        {
         data.map((info, index)=>{
            return (
                <div key={index} className="w">
                    <div className="menu-card-wrapper">
                        <div className="img-container"><img src={info.img} alt/></div>
                        <div className="menu-card--info">
                            <UpperCarte data={info} />
                            <Icons data={info}/>

                            <section className="ingredients">
                                <MainIngredient data={info}/>
                                <SubIngredient data={info}/>
                            </section>
                            <div className="order-btn"><button>Order now</button></div>
                        </div>
                    </div>
                </div>

            )
         })

        }
       </div>
    )
}

export default Main