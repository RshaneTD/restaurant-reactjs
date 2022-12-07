import React from "react";
import { Link } from "react-router-dom";
import data from '../data/menu_data/desert'
import Main from '../components/carte'

function IceCream() {
    return(
        <>
            
            <div className="menu-text">
                <p>
                    This the menu section dedicated to our most praise artisanal <br/>
                    preparation. Although the  recipes mat seem 
                    unorthodox at first sight, <br/> their taste is something to behold.
                </p>
            </div>
            <Main data={data}/>
            <div className="buttons">
                <Link to="/Menu"><button>main</button></Link>
                <Link to="/Drinks"><button>Drinks</button></Link>
                
            </div>


           
        </>
    )
}

export default IceCream